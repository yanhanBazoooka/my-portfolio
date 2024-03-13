import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-md py-6">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-center text-gray-900">Han Yan</h1>
          <p className="text-center text-gray-600">805-905-5791 | fqw6pv@virginia.edu</p>
          <p className="text-center"><a href="https://www.linkedin.com/in/hanyan0606" className="text-blue-500">LinkedIn Profile</a></p>
        </div>
      </header>

      <main className="container mx-auto px-6 flex-grow">
        <section className="my-12">
          <h2 className="text-2xl font-bold text-gray-700">Education</h2>
          <p className="text-gray-600 mt-2">University of Virginia, McIntire School of Commerce - B.S. in Commerce (Quantitative Analysis), double major in Computer Science, minor in Data Science, GPA: 3.7/4.0, Expected May 2025</p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-bold text-gray-700">Technical Skills</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Programming: Java, C, React, Node.js, AWS, SQLite, Docker, Shell, C++, Python, SQL, Linux, R, JavaScript</li>
            <li>Business: Tableau, Financial Accounting, Managerial Accounting</li>
          </ul>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-bold text-gray-700">Experience</h2>
          <div className="text-gray-600">
            <h3 className="font-bold">Mastercard - Infrastructure Software Engineer Intern</h3>
            <p className="italic">June 2023–August 2023</p>
            <ul className="list-disc list-inside">
              <li>Initiated a project to transition mainframe development to modern DevOps with Zowe CLI, Node.js, and Jenkins API.</li>
              <li>Managed Ansible Tower docker image in a zCX with CentOS environment.</li>
              <li>Co-developed full stack Angular project using TypeScript and JavaScript.</li>
            </ul>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-bold text-gray-700">Projects</h2>
          <div className="text-gray-600">
            <h3 className="font-bold">Java Course Registration System - Class Project</h3>
            <ul className="list-disc list-inside">
              <li>Developed a command-line User Interface (UI) course review application using Java, Gradle, and SQLite.</li>
              <li>Implemented a robust Three-Layer Architecture for system resilience.</li>
            </ul>
          </div>
          <div className="text-gray-600 mt-6">
            <h3 className="font-bold">Don't Mess with the Cat - Personal Web Game</h3>
            <p>Developed a web game with JavaScript, published online and gained 152 plays within the school. <a href="https://codehs.com/sandbox/williamyan/dont-mess-with-the-cat" className="text-blue-500">Play the Game</a></p>
          </div>
        </section>
      </main>

      <footer className="bg-white shadow-md py-6 mt-auto">
        <div className="container mx-auto px-6 text-center text-gray-600">
          &copy; {new Date().getFullYear()} Han Yan.
        </div>
      </footer>
    </div>
  );
};

export default Home;
