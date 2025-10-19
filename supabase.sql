CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE skills (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE experiences (
  id SERIAL PRIMARY KEY,
  company VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE POLICY IF NOT EXISTS select_projects ON projects FOR SELECT USING (true);
CREATE POLICY IF NOT EXISTS insert_projects ON projects FOR INSERT TO authenticated USING (true);
CREATE POLICY IF NOT EXISTS update_projects ON projects FOR UPDATE TO authenticated USING (true);
CREATE POLICY IF NOT EXISTS delete_projects ON projects FOR DELETE TO authenticated USING (true);

CREATE POLICY IF NOT EXISTS select_skills ON skills FOR SELECT USING (true);
CREATE POLICY IF NOT EXISTS insert_skills ON skills FOR INSERT TO authenticated USING (true);
CREATE POLICY IF NOT EXISTS update_skills ON skills FOR UPDATE TO authenticated USING (true);
CREATE POLICY IF NOT EXISTS delete_skills ON skills FOR DELETE TO authenticated USING (true);

CREATE POLICY IF NOT EXISTS select_experiences ON experiences FOR SELECT USING (true);
CREATE POLICY IF NOT EXISTS insert_experiences ON experiences FOR INSERT TO authenticated USING (true);
CREATE POLICY IF NOT EXISTS update_experiences ON experiences FOR UPDATE TO authenticated USING (true);
CREATE POLICY IF NOT EXISTS delete_experiences ON experiences FOR DELETE TO authenticated USING (true);