import { ReactNode, createContext, useState } from "react";

interface UploadContextType{
 file: any
 getFile: (event: Event) => void
}

export const UploadContext = createContext({} as UploadContextType);

 export function UploadProviderContext( { children }: {  children: ReactNode}) {
  const [file, setFile] = useState();

  function getFile(event: Event) {
    setFile(URL.createObjectURL(event.target.files[0]));
  }

  return <UploadContext.Provider value={{ file, getFile }}>
    {children}
  </UploadContext.Provider>;
}
