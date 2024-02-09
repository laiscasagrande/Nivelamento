interface IModal{
  isOpen: boolean;
}

export function Modal({isOpen}:IModal) {

if (isOpen) { 
  return <h1>modal</h1> 
}
  return null;
}
