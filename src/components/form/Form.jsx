/* eslint-disable react/prop-types */
import style from './Form.module.css';
<<<<<<< HEAD
import { useState, useEffect } from 'react';
=======
// import { useState, useEffect } from 'react';

// const defaultFormData = {
//   title: '',
//   image: undefined /* compila questo campo */,
//   content: '',
//   tags: [],
//   published: true,
// };

// export default function Form({ add }) {
//   // const [titleInput, setTitleInput] = useState('');
//   const [formData, setFormData] = useState(defaultFormData);
//   const [tags, setTags] = useState([]);
//   // const [isChecked, setIsChecked] = useState(false);

//   function handleFormData(e) {
//     console.log('parte il form handler');

//     const key = e.target.name;
//     const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

//     if(e.target.type === ' checkbox') {
//       const newTags = [...formData.tags, tags]
//     }

//     // checkboxHandler(e);
//     const newData = {
//       ...formData,
//       [key]: value,
//     };

//     setFormData(newData);
//   }

//   function checkboxHandler(e) {
//     console.log('checkbox handler');

//     const checkbox = e.target;

//     // add tags
//     checkbox.checked ? setTags([...tags, checkbox.name]) : setTags(tags.filter((tag) => tag !== checkbox.name));

//     console.log(tags);
//     setFormData({
//       ...formData,
//       tags: tags,
//     });
//   }

//   function emptyForm() {
//     setFormData(defaultFormData);
//   }

//   return (
//     <form onSubmit={(e) => e.preventDefault()} className={style.form}>
//       <h3>Aggiungi un nuovo post</h3>

//       <input onChange={handleFormData} className={style.input} name="title" type="text" placeholder="Inserisci il nuovo titolo" value={formData.title} />

//       <input onChange={handleFormData} className={style.input} name="image" type="text" placeholder="Inserisci un immagine" />

//       <label htmlFor="category">
//         scegli una categoria:
//         <select className={style.category} name="category">
//           <option value="frontend">Frontend</option>
//           <option value="backend">Backend</option>
//           <option value="newsy">News</option>
//           <option value="plans">Plans</option>
//         </select>
//       </label>

//       <textarea className={style.textarea} onChange={handleFormData} name="content" type="text-area" placeholder="Inserisci il contenuto" value={formData.content} />

//       <div className={style.tags_checkbox}>
//         <label htmlFor="html">Html</label>
//         <input onChange={checkboxHandler} className={style.input} name="html" type="checkbox" />

//         <label htmlFor="css">Css</label>
//         <input onChange={checkboxHandler} className={style.input} name="css" type="checkbox" />

//         <label htmlFor="js">Javascript</label>
//         <input onChange={checkboxHandler} className={style.input} name="js" type="checkbox" />

//         <label htmlFor="php">Php</label>
//         <input onChange={checkboxHandler} className={style.input} name="php" type="checkbox" />
//       </div>
//       <div className="btn_wrap">
//         <button
//           onClick={() => {
//             add(formData);
//             emptyForm();
//           }}
//           className={style.add_btn}
//         >
//           Add
//         </button>
//       </div>
//     </form>
//   );
// }

import { useState } from 'react';
>>>>>>> 67ce1d6b3ea05c297c82688ca953f6f7b1505135

const defaultFormData = {
  title: '',
  image: undefined,
  content: '',
  published: true,
};

export default function Form({ add }) {
  const [formData, setFormData] = useState(defaultFormData);
<<<<<<< HEAD
  const [tags, setTags] = useState([]);
  // const [isChecked, setIsChecked] = useState(false);
=======
  const [tags, setTags] = useState([]); // Stato separato per i tags
>>>>>>> 67ce1d6b3ea05c297c82688ca953f6f7b1505135

  // Funzione per gestire la modifica di tutti i campi, incluso i tags
  function handleFormData(e) {
    console.log('parte il form handler');

    const key = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

<<<<<<< HEAD
    if (e.target.type === ' checkbox') {
      const newTags = [...formData.tags, tags];
    }

    // checkboxHandler(e);
    const newData = {
      ...formData,
      [key]: value,
    };

    setFormData(newData);
  }

  function checkboxHandler(e) {
    console.log('checkbox handler');

    const checkbox = e.target;

    // add tags
    checkbox.checked ? setTags([...tags, checkbox.name]) : setTags(tags.filter((tag) => tag !== checkbox.name));

    console.log(tags);
    setFormData({
      ...formData,
      tags: tags,
    });
  }

=======
    if (e.target.type === 'checkbox') {
      // Gestiamo l'aggiornamento dei tags separatamente
      setTags((prevTags) => {
        if (value) {
          // Se il checkbox è selezionato, aggiungi il tag
          return [...prevTags, key];
        } else {
          // Se il checkbox è deselezionato, rimuovi il tag
          return prevTags.filter((tag) => tag !== key);
        }
      });
    } else {
      // Gestiamo gli altri campi del form (non checkbox)
      setFormData((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    }
  }

>>>>>>> 67ce1d6b3ea05c297c82688ca953f6f7b1505135
  function emptyForm() {
    setFormData(defaultFormData);
    setTags([]); // Resettiamo anche i tags
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className={style.form}>
      <h3>Aggiungi un nuovo post</h3>

      <input onChange={handleFormData} className={style.input} name="title" type="text" placeholder="Inserisci il nuovo titolo" value={formData.title} />

<<<<<<< HEAD
      <input onChange={handleFormData} className={style.input} name="image" type="text" placeholder="Inserisci un immagine" />

      <label htmlFor="category">
        scegli una categoria:
        <select className={style.category} name="category">
=======
      <input onChange={handleFormData} className={style.input} name="image" type="text" placeholder="Inserisci un'immagine" />

      <label htmlFor="category">
        scegli una categoria:
        <select className={style.category} name="category" onChange={handleFormData}>
>>>>>>> 67ce1d6b3ea05c297c82688ca953f6f7b1505135
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="newsy">News</option>
          <option value="plans">Plans</option>
        </select>
      </label>

      <textarea className={style.textarea} onChange={handleFormData} name="content" type="text-area" placeholder="Inserisci il contenuto" value={formData.content} />

      <div className={style.tags_checkbox}>
        <label htmlFor="html">Html</label>
<<<<<<< HEAD
        <input onChange={checkboxHandler} className={style.input} name="html" type="checkbox" />

        <label htmlFor="css">Css</label>
        <input onChange={checkboxHandler} className={style.input} name="css" type="checkbox" />

        <label htmlFor="js">Javascript</label>
        <input onChange={checkboxHandler} className={style.input} name="js" type="checkbox" />

        <label htmlFor="php">Php</label>
        <input onChange={checkboxHandler} className={style.input} name="php" type="checkbox" />
=======
        <input
          onChange={handleFormData}
          className={style.input}
          name="html"
          type="checkbox"
          checked={tags.includes('html')} // Usa i tags separati per determinare se il checkbox è selezionato
        />

        <label htmlFor="css">Css</label>
        <input
          onChange={handleFormData}
          className={style.input}
          name="css"
          type="checkbox"
          checked={tags.includes('css')} // Usa i tags separati per determinare se il checkbox è selezionato
        />

        <label htmlFor="js">Javascript</label>
        <input
          onChange={handleFormData}
          className={style.input}
          name="js"
          type="checkbox"
          checked={tags.includes('js')} // Usa i tags separati per determinare se il checkbox è selezionato
        />

        <label htmlFor="php">Php</label>
        <input
          onChange={handleFormData}
          className={style.input}
          name="php"
          type="checkbox"
          checked={tags.includes('php')} // Usa i tags separati per determinare se il checkbox è selezionato
        />
>>>>>>> 67ce1d6b3ea05c297c82688ca953f6f7b1505135
      </div>

      <div className="btn_wrap">
        <button
          onClick={() => {
            add({ ...formData, tags }); // Passiamo sia formData che tags
            emptyForm(); // Resettiamo il form e i tags
          }}
          className={style.add_btn}
        >
          Add
        </button>
      </div>
    </form>
  );
}
