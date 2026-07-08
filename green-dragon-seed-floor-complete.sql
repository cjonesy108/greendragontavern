-- Green Dragon Tavern — Tavern Floor: tables + seed
-- Run this entire block in Supabase SQL Editor

-- Tables
CREATE TABLE IF NOT EXISTS floor_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  body text NOT NULL,
  author_name text NOT NULL DEFAULT 'Anonymous',
  author_slug text REFERENCES annotators(slug),
  vote_count int NOT NULL DEFAULT 0,
  reply_count int NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS floor_replies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid NOT NULL REFERENCES floor_posts(id) ON DELETE CASCADE,
  author_name text NOT NULL DEFAULT 'Anonymous',
  body text NOT NULL,
  vote_count int NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS floor_post_votes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid NOT NULL REFERENCES floor_posts(id) ON DELETE CASCADE,
  session_id text NOT NULL,
  UNIQUE(post_id, session_id)
);

CREATE TABLE IF NOT EXISTS floor_reply_votes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reply_id uuid NOT NULL REFERENCES floor_replies(id) ON DELETE CASCADE,
  session_id text NOT NULL,
  UNIQUE(reply_id, session_id)
);

-- RLS
ALTER TABLE floor_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE floor_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE floor_post_votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE floor_reply_votes ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='floor_posts' AND policyname='floor_posts_select') THEN
    CREATE POLICY floor_posts_select ON floor_posts FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='floor_posts' AND policyname='floor_posts_insert') THEN
    CREATE POLICY floor_posts_insert ON floor_posts FOR INSERT WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='floor_replies' AND policyname='floor_replies_select') THEN
    CREATE POLICY floor_replies_select ON floor_replies FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='floor_replies' AND policyname='floor_replies_insert') THEN
    CREATE POLICY floor_replies_insert ON floor_replies FOR INSERT WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='floor_post_votes' AND policyname='floor_post_votes_select') THEN
    CREATE POLICY floor_post_votes_select ON floor_post_votes FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='floor_post_votes' AND policyname='floor_post_votes_insert') THEN
    CREATE POLICY floor_post_votes_insert ON floor_post_votes FOR INSERT WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='floor_post_votes' AND policyname='floor_post_votes_delete') THEN
    CREATE POLICY floor_post_votes_delete ON floor_post_votes FOR DELETE USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='floor_reply_votes' AND policyname='floor_reply_votes_select') THEN
    CREATE POLICY floor_reply_votes_select ON floor_reply_votes FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='floor_reply_votes' AND policyname='floor_reply_votes_insert') THEN
    CREATE POLICY floor_reply_votes_insert ON floor_reply_votes FOR INSERT WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='floor_reply_votes' AND policyname='floor_reply_votes_delete') THEN
    CREATE POLICY floor_reply_votes_delete ON floor_reply_votes FOR DELETE USING (true);
  END IF;
END $$;

-- Triggers
CREATE OR REPLACE FUNCTION update_floor_post_vote_count() RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN UPDATE floor_posts SET vote_count = vote_count + 1 WHERE id = NEW.post_id;
  ELSIF TG_OP = 'DELETE' THEN UPDATE floor_posts SET vote_count = vote_count - 1 WHERE id = OLD.post_id;
  END IF; RETURN NULL;
END; $$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS floor_post_vote_trigger ON floor_post_votes;
CREATE TRIGGER floor_post_vote_trigger AFTER INSERT OR DELETE ON floor_post_votes FOR EACH ROW EXECUTE FUNCTION update_floor_post_vote_count();

CREATE OR REPLACE FUNCTION update_floor_reply_vote_count() RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN UPDATE floor_replies SET vote_count = vote_count + 1 WHERE id = NEW.reply_id;
  ELSIF TG_OP = 'DELETE' THEN UPDATE floor_replies SET vote_count = vote_count - 1 WHERE id = OLD.reply_id;
  END IF; RETURN NULL;
END; $$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS floor_reply_vote_trigger ON floor_reply_votes;
CREATE TRIGGER floor_reply_vote_trigger AFTER INSERT OR DELETE ON floor_reply_votes FOR EACH ROW EXECUTE FUNCTION update_floor_reply_vote_count();

CREATE OR REPLACE FUNCTION update_floor_post_reply_count() RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN UPDATE floor_posts SET reply_count = reply_count + 1 WHERE id = NEW.post_id;
  ELSIF TG_OP = 'DELETE' THEN UPDATE floor_posts SET reply_count = reply_count - 1 WHERE id = OLD.post_id;
  END IF; RETURN NULL;
END; $$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS floor_reply_count_trigger ON floor_replies;
CREATE TRIGGER floor_reply_count_trigger AFTER INSERT OR DELETE ON floor_replies FOR EACH ROW EXECUTE FUNCTION update_floor_post_reply_count();

-- Seed posts
INSERT INTO floor_posts (title, body, author_name, author_slug) VALUES

('The Constitution was written to prevent democracy, not enable it.',
'This is the uncomfortable truth most civics classes skip. The Senate gives Wyoming the same power as California. The Electoral College was designed to filter popular will through elites. The Supreme Court is appointed for life, accountable to no voter. The amendment process requires supermajorities so large that obvious reforms die on the vine.

Madison was explicit about this in Federalist No. 10. Pure democracy was dangerous because passionate majorities could tyrannize minorities. The Constitution was a brake on majority rule — not an expression of it. The founders called this a feature, not a bug.

The question worth arguing about: is that brake still calibrated correctly? Or has it drifted — from protecting minority rights to protecting minority rule? Those are very different things, and the text doesn''t tell us which one we have.',
'Anonymous', null),

('Washington''s Farewell Address is the most prophetic document in American history. Possibly too prophetic.',
'He warned against the spirit of party — that faction would inflame animosity, make men see enemies in neighbors, and open the door to demagogues who would use the chaos for their own elevation. He warned against foreign entanglements and permanent alliances. He warned against accumulating public debt. He warned that regional identity would be weaponized against national unity.

He wrote all of this in 1796.

Two hundred and twenty-eight years later, every single warning has either come true or is actively in progress. Which raises a question I find genuinely unsettling: did Washington describe inevitable human nature — something that would have happened regardless? Or did he name these failure modes so precisely that we absorbed them, and then followed the script anyway?

There is a third possibility, and it''s the darkest one: he saw all of this coming and published the warning anyway, because he believed naming it was the only tool a free people had. That''s either very hopeful or very sad, depending on the day.',
'Anonymous', null),

('The Second Amendment is two sentences long. Americans cannot agree on what either of them means. This is a design failure.',
'Here is the full text: "A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed."

Scalia, writing for the majority in Heller (2008), held that the operative clause establishes an individual right to possess firearms independent of any militia service. The prefatory clause merely announces a purpose; it does not limit the right.

Stevens dissented with equal force: the prefatory clause is not decorative. The amendment was adopted specifically to protect the states'' ability to maintain militias against federal overreach. It was never about individual self-defense.

Here is what both sides avoid: in 1791, there was no standing army. The founders feared professional militaries as the classic instrument of tyranny. Every able-bodied man was expected to show up with his own weapon. That world no longer exists. A genuine "well regulated Militia" in the founders'' sense exists nowhere in America. The text remains. The world it described is gone. We are all improvising.',
'Anonymous', null),

('Jefferson wrote "all men are created equal" while enslaving more than 600 people. The words are more powerful because of it — not less.',
'This is the argument Lincoln made, and it is the most demanding version of American optimism available.

The Declaration''s self-evident truths were aspirational even when written. Jefferson knew he failed them personally. His contemporaries knew it too — Abigail Adams knew it, the Quakers knew it, free Black Americans in Philadelphia knew it. The hypocrisy was not hidden. It was public, enormous, and immediately pointed out.

Lincoln argued this was precisely the point. You set the standard high so it indicts every generation that falls short, including the one that wrote it. The words were a promissory note the nation was forever obligated to redeem — not a description of America as it was, but a mandate for what it must become.

Frederick Douglass spent years calling Independence Day a fraud before arriving, late in his life, at something closer to Lincoln''s view — that the Constitution was a "glorious liberty document" being used for evil purposes. The words were sound. The failure was human.

The words survived their author''s hypocrisy. Whether that is the American miracle or the American excuse is the argument that never ends.',
'Anonymous', null),

('Madison''s solution to factions assumed bad ideas don''t scale. Social media proved him wrong.',
'Madison''s argument in Federalist No. 10 is elegant. In a large republic, factions would proliferate and cancel each other out. No single passion, grievance, or demagogue could simultaneously capture enough of the extended country to dominate. Geography was the mechanism. Distance was the feature. A lie told in Virginia could not, in 1787, instantly reach Georgia, Massachusetts, and the frontier settlements. It would lose momentum in transit.

The extended republic required friction. It assumed that organizing a national majority would take long enough for passions to cool and reason to reassert itself.

Social media collapsed the extended republic into a single room. Madison''s mechanism — the thing he designed to save republican government — assumed friction. We engineered the friction away in the name of connection.

The question is not whether Madison was wrong. The question is what he would build now. He was the most rigorous institutional designer the founders produced. He would not throw up his hands. He would look at the new landscape and start drafting. What does a Madisonian solution to algorithmic faction look like?',
'Anonymous', null),

('The most consequential word in the Constitution is "necessary." Hamilton and Jefferson fought about it in 1791. We are still fighting.',
'Article I, Section 8 gives Congress power to make "all Laws which shall be necessary and proper for carrying into Execution" its other powers. This is the Necessary and Proper Clause. It determines how large the federal government can be.

In 1791, Hamilton argued "necessary" meant "useful" or "conducive to." A national bank wasn''t explicitly authorized, but it was a reasonable instrument for executing authorized powers — therefore constitutional. Jefferson argued the opposite: "necessary" meant "essential," "without which the grant of power would be nugatory." The bank wasn''t essential. It was convenient. Therefore unconstitutional.

Washington sided with Hamilton. Marshall''s McCulloch v. Maryland (1819) settled it Hamilton''s way. The federal government has been expanding ever since.

But the argument never died. It just moved. The New Deal. The Civil Rights Act. The Affordable Care Act. Every major expansion of federal power in American history is, at its root, a re-argument about what Hamilton and Jefferson meant by one word in 1787.

One word. The whole architecture hangs on it. Pick a side.',
'Anonymous', null);
