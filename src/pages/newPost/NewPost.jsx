import { useForm } from "react-hook-form";
import FormField from "../../components/formField/FormField.jsx";
import "./NewPost.css";
import calculateReadTime from "../../helpers/calculateReadTime/calculateReadTime.js";
import {useNavigate} from "react-router-dom";

function NewPost() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm();

  function onSubmit(data) {
    const enrichedData = {
      ...data,
      comments: 0,
      shares: 0,
      created: new Date().toISOString(),
      readTime: calculateReadTime(data.content),
    };
    console.log("Submitted data:", enrichedData);
    setTimeout(() => {
      navigate("/overview");
    }, 3000);
    reset();
  }

  const navigate = useNavigate();

  return (
    <div className="new-post">
      <h1>Post toevoegen</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormField className="form-field"
          label="Titel"
          name="title"
          {...register("title", { required: "Titel is verplicht." })}
          error={errors.title?.message}
        />
        <FormField className="form-field"
          label="Subtitel"
          name="subtitle"
          {...register("subtitle", { required: "Subtitel is verplicht." })}
          error={errors.subtitle?.message}
        />
        <FormField className="form-field"
          label="Auteur"
          name="author"
          {...register("author", { required: "Auteur is verplicht." })}
          error={errors.author?.message}
        />
        <div>
          <label htmlFor="content">Bericht</label>
          <textarea
            id="content"
            rows="10"
            {...register("content", {
              required: "Bericht is verplicht.",
              minLength: { value: 300, message: "Bericht moet minimaal 300 karakters zijn." },
              maxLength: { value: 2000, message: "Bericht mag maximaal 2000 karakters zijn." }
            })}
          ></textarea>
          {errors.content && <div className="error">{errors.content.message}</div>}
        </div>
        <button type="submit">Toevoegen</button>
        {isSubmitSuccessful && <div className="success">Blogpost succesvol aangemaakt! (niet echt opgeslagen)</div>}
      </form>
    </div>
  );
}

export default NewPost;