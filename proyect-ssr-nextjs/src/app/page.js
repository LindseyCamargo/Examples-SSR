import Image from 'next/image'
import styles from './page.module.css'
import './sass-styles.scss';

export default function Home() {
  return (
    <>
      <div className="form">

        <h1 className='h1'> Ejemplo de formulario reactivo </h1>

        <form className="form-content">

          <div className="form-content-camp">
            <label>Nombre Completo</label>
            <input type="text" name="fullName" placeholder="Eduardo Cardenas" />
          </div>

          <div className="form-content-camp">
            <label>Correo Electronico</label>
            <input type="email" name="email" placeholder="Ejemplo@correo.com" />
          </div>

          <div className="form-content-camp">
            <label>Mensaje</label>
            <textarea name="message" placeholder="Necesito más información" ></textarea>
          </div>

          <button className='button'>Enviar</button>
        </form>

      </div >
    </>

  )
}
