import { Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function PrivatePage(props) {
  //   const [image, setImage] = useState();
  // const [file, setfile] = useState();
  // const [createObjectURL, setCreateObjectURL] = useState<
  //   undefined | ReturnType<typeof URL.createObjectURL>
  // >();

  const [formData, setFormData] = useState<FormData | undefined>();

  const uploadToClient = (event) => {
    if (!event.target.files?.length) {
      return;
    }

    const formData = new FormData();

    Array.from(event.target.files).forEach((file) => {
      console.log(file);
      formData.append(event.target.name, file as string);
    });

    setFormData(formData);
    // formRef.current?.reset();
  };

  const uploadToServer = async (event) => {
    if (formData) {
      console.log("formData", formData);
      const response = await axios.post("/api/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (event) => {
          console.log(
            `Current progress:`,
            Math.round((event.loaded * 100) / event.total)
          );
        },
      });
      console.log("response", response.data);
    }
  };

  return (
    <div>
      <div>
        {/* <img src={createObjectURL} /> */}
        <Typography>Select File</Typography>
        <input
          type="file"
          onChange={uploadToClient}
          name="files"
          // uploadFileName={"files"}
        />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button>
      </div>
    </div>
  );
}
