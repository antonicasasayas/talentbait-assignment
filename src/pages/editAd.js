import React, { useState } from "react";
import adsStore from "../reflux/StatusStore"
import Axios from "axios";

export default function EditAd(props) {
  const [fields, setFields] = useState({
    pictures: "",
    id_product: props.match.params.id,
    headline: "",
    description: "",
    cta: "",
  });

  const uploadImage = (files) => {
    console.log(files[0]);
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "ml_default");

    Axios.post(
      "https://api.cloudinary.com/v1_1/duqq5mnpv/image/upload",
      formData
    ).then((response) => setFields({ ...fields, pictures: response.data.url }));
    console.log(fields.pictures);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    adsStore.onEdit(props.match.params.id, fields);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };
  return (
    <div className="form-container">
      <h1>Edit an ad </h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="headline">Headline</label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          value={fields.headline}
          name="headline"
        />
        <label htmlFor="headline">Description</label>

        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="description"
          value={fields.description}
        />
        <label htmlFor="headline">Call to action</label>

        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="cta"
          value={fields.cta}
        />
        <label htmlFor="pictures">Pictures</label>
        <input
          onChange={(e) => uploadImage(e.target.files)}
          type="file"
          name="pictures"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
