"use client";

const EditTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("nothing");
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="add topic"
          className="border border-black w-full px-5 mt-4 py-4 rounded-md"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="add topic"
          className="border border-black w-full px-5 mt-4 py-4 rounded-md"
        />
        <button
          type="submit"
          className="mt-4 py-4 bg-green-900 text-white w-full font-bold rounded-md hover:bg-green-800"
        >
          Update Topic
        </button>
      </form>
    </div>
  );
};

export default EditTopic;
