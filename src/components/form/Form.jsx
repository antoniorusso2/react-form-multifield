/* eslint-disable react/prop-types */
import style from './Form.module.css';
import { useState } from 'react';

const defaultFormData = {
  title: '',
  image: undefined /* compila questo campo */,
  content: '',
  tags: [],
  published: true,
};

export default function Form({ add }) {
  // const [titleInput, setTitleInput] = useState('');
  const [formData, setFormData] = useState(defaultFormData);

  function handleFormData(e) {
    const key = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    const newData = {
      ...formData,
      [key]: value,
    };

    console.log(newData);
    setFormData(newData);
  }
  function emptyForm() {
    setFormData(defaultFormData);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className={style.form}>
      <h3>Aggiungi un nuovo post</h3>

      <input onChange={handleFormData} className={style.input} name="title" type="text" placeholder="Inserisci il nuovo titolo" value={formData.title} />

      <input
        onChange={handleFormData}
        className={style.input}
        name="image"
        type="text"
        placeholder="Inserisci un immagine"
        value={
          // formData.image
          'https://picsum.photos/600/400'
        }
      />

      <label htmlFor="category">
        scegli una categoria
        <select name="category">
          <option value="viaggi">Viaggi</option>
          <option value="lettura">Lettura</option>
          <option value="hobby">Passatempo</option>
          <option value="lavoro">Lavoro</option>
        </select>
      </label>

      <textarea className={style.textarea} onChange={handleFormData} name="content" type="text-area" placeholder="Inserisci il contenuto" value={formData.content} />

      <div className={style.tags_checkbox}>
        <label htmlFor="html_tag">Html</label>
        <input onChange={handleFormData} className={style.input} name="html_tag" type="checkbox" />

        <label htmlFor="css_tag">Css</label>
        <input onChange={handleFormData} className={style.input} name="css_tag" type="checkbox" />

        <label htmlFor="php_tag">Javascript</label>
        <input onChange={handleFormData} className={style.input} name="js_tag" type="checkbox" />

        <label htmlFor="php_tag">Php</label>
        <input onChange={handleFormData} className={style.input} name="php_tag" type="checkbox" />
      </div>
      <div className="btn_wrap">
        <button
          onClick={() => {
            add(formData);
            emptyForm();
          }}
          className={style.add_btn}
        >
          Add
        </button>
      </div>
    </form>
  );
}
