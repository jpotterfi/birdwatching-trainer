export default function Modal(props) {
  return (
    <dialog className="modal" id={"modal" + props.birdName}>
      <img className="modalBirdImage" src={props.img} />
      <h1 className="modalBirdName">{props.birdName}</h1>
    </dialog>
  );
}
