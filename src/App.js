import AuthorForm from "./components/AuthorForm";
import FetchedAuthorList from "./components/FetchedAuthorList";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      {/* Apply container class */}
      <h1>Author Submission Form</h1>
      <AuthorForm />
      <hr />
      <h1>Fetch Authors</h1>
      <FetchedAuthorList />
    </div>
  );
};

export default App;
