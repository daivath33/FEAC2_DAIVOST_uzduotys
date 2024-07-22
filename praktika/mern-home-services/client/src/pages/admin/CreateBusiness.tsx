import React from "react";
import Input from "../../components/common/Input";
import styles from "./CreateBusiness.module.scss";

const CreateBusiness: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [category, setCategory] = React.useState<string>("");
  const [contactPerson, setContactPerson] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [photos, setPhotos] = React.useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const businessData = {
        name,
        email,
        address,
        category,
        contactPerson,
        description,
        photos,
      };
      console.log(businessData);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div className={styles.page}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Create New Business</h2>
        <input
          placeholder="enter business name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="enter business email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="enter business address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          placeholder="enter  contact person..."
          value={contactPerson}
          onChange={(e) => setContactPerson(e.target.value)}
        />
        <textarea
          placeholder="enter business name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default CreateBusiness;
