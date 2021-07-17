import React, { useState } from "react";
import adsStore from "../../reflux/StatusStore";

import "./createAd.css";
export default function CreateAd(props) {
  const [fields, setFields] = useState({
    id_product: props.match.params.id,
    headline: "",
    description: "",
    cta: "",
  });
  console.log(adsStore)
  const handleSubmit = (e) => {
    const {id_product, headline, description, cta} = fields
    e.preventDefault()
    adsStore.onCreate(id_product, headline, description, cta);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };
  return (
    <div className="form-container">
      <h1>Create an ad </h1>
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
