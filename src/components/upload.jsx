import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload({ onUploadComplete }) {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (event) => {
    const files = event.target.files;
    if (files.length === 0) return;

    const file = files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'your_upload_preset'); // Replace with your Cloudinary upload preset

    try {
      setUploading(true);
      const response = await axios.post('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', formData);
      const imageUrl = response.data.secure_url;

      // Callback function to notify parent about the uploaded image URL
      if (onUploadComplete) {
        onUploadComplete(imageUrl);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Upload Image'}
        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
      </Button>
    </div>
  );
}
