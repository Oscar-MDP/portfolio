
interface ModalProps {
    onOpen: boolean,
    onClose: () => void;
    children: React.ReactElement | React.ReactNode;
}

const Modal = () => {
  return (
    <div className="
        fixed
        inset-0
        z-20
        bg-neutral-800/70
        hidden
        items-center
        justify-center
    ">
        <div className="
            w-4/6
            h-5/6
            bg-white
            transition
            translate-y-full
            opacity-0
        ">

        {}
        </div>
    </div>
  )
}
export default Modal