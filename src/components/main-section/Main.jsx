import Card from '../card/Card.jsx';
import Form from '../form/Form.jsx';
import style from './main.module.css';
import { posts } from '../../data/posts.js';
import { useState, useEffect } from 'react';

function Main() {
  // const [titleInput, setTitleInput] = useState('');
  const [publishedPosts, setPublishedPosts] = useState(posts.filter((post) => post.published));
  const [addedList, setAddedList] = useState([]);

  //id da inserire ad ogni elemento aggiunto
  let nextId = publishedPosts.length + 1;

  // function newTitle(e) {
  //   setTitleInput(e.target.value);

  // }

  // function addNewElement() {

  //   const newElement = {
  //     id: nextId,
  //     title,
  //     published: true,
  //   };
  //   setPublishedPosts([...publishedPosts, newElement]);
  //   setAddedList([...addedList, newElement]);
  // }

  function printAddedList(obj) {
    console.log(obj);
    obj.id = nextId;
    setPublishedPosts([
      ...publishedPosts,
      {
        ...obj,
      },
    ]);
    setAddedList([...addedList, obj]);
  }
  function deletePost(id) {
    setPublishedPosts(publishedPosts.filter((post) => post.id !== id));
    setAddedList(addedList.filter((post) => post.id !== id));
  }

  // console.log(titleInput);
  return (
    <main className={style.main}>
      <div className="container">
        <div className="row">
          <div className="title col-12">
            <h1 className={`${style.title} col-12`}>Titolo pagina</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <section className="added_elements_section">
              <div className="add_form">
                {/* <form onSubmit={(e) => e.preventDefault()} className="form_element">
                  <input onChange={addNewElement} className={style.input} name="new-title" type="text" placeholder="Inseri
                  sci il nuovo titolo" value={inputData} />
                </form> */}

                <Form add={} />
                <ul className={style.added_list}>
                  {addedList &&
                    addedList.map((el) => (
                      <li key={el.id} className={style.new_el}>
                        <p>
                          <strong>Hai aggiunto:</strong> {el.title}
                        </p>
                        {/* delete */}
                        <button onClick={() => deletePost(el.id)} className={style.delete_btn}>
                          Delete
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="published_posts">
          <div className="row">
            {publishedPosts.map((post) => {
              return <Card key={post.id} item={post} />;
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
