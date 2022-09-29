import { useEffect, useRef } from "react";
import { useState } from "react";
import Button from "./Button";
import styles from "../styles/Info.module.css";
export default function Info(props) {
  const klasa = useRef();
  const wiek = useRef();
  const opis = useRef();
  const link = useRef();
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrl] = useState([]);
  function onImageChange(e) {
    setImages([...e.target.files]);
    console.log(images);
  }
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrl(newImageUrls);
  }, [images]);
  function submitHandler(e) {
    e.preventDefault();

    const infoData = {
      klasa: klasa.current.value,
      wiek: wiek.current.value,
      opis: opis.current.value,
      link: opis.current.value,
      zdjecia: images,
    };
    props.onInfo(infoData);
    klasa.current.value = "";
    wiek.current.value = "";
    opis.current.value = "";
  }
  return (
    <div className={styles.div}>
      <form onSubmit={submitHandler}>
        <label>Klasa</label>
        <input ref={klasa} type="text"></input>
        <label>Wiek</label>
        <input ref={wiek} type="number"></input>
        <label>Opis</label>
        <textarea ref={opis}></textarea>
        <label>Kontakt do ciebie</label>
        <input type="text" ref={link}></input>
        <label>Zdjęcie</label>

        <input
          className={styles.file}
          type="file"
          multiple
          accept="image/*"
          onChange={onImageChange}
        />
        <div className={styles.imgCont}>
          {imageUrls.map((image) => (
            <img src={image} width="200"></img>
          ))}
        </div>

        <Button
          className={styles.button}
          textContent="Rozpocznij przeglądanie"
        ></Button>
      </form>
    </div>
  );
}
