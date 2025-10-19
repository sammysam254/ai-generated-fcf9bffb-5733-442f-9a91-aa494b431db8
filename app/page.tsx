import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Layout } from './layout';

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*');
      if (error) {
        console.error(error);
      } else {
        setProjects(data);
      }
      setLoading(false);
    };
    fetchProjects();
  }, []);

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-white mt-20 mb-10">
        My Projects
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-5 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default HomePage;