import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ProjectCard = ({ title, description, imgUrl, gitUrl, pptUrl }) => {
  const getButtonLabel = (url) => {
    if (url.includes('github.com')) {
      return 'Github';
    } else if (url.includes('figma.com')) {
      return 'Figma';
    } else {
      return 'View';
    }
  };

  return (
    <Card className="max-w-sm rounded-3xl overflow-hidden shadow-lg m-4 flex flex-col justify-between h-auto" style={{ backgroundColor: '#f3f4f6' }}>
      <div className="flex justify-center items-center p-4">
        <CardMedia
          component="img"
          alt={`${title} image`}
          image={imgUrl}
          className="w-48 h-48 object-contain rounded-xl border border-black"
        />
      </div>
      <CardContent className="text-auto flex-grow">
        <Typography variant="h5" component="div" className="text-lg font-bold mt-4 text-black">
          {title}
        </Typography>
        <Typography variant="body2" component="p" className="text-gray-600 mt-2">
          {description}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-center mb-4">
        {gitUrl && (
          <button 
            className="bg-white text-black font-bold py-2 px-4 rounded-full border-2 border-gray-600 hover:bg-gray-800 hover:text-white mx-2"
            onClick={() => window.open(gitUrl, "_blank")}
          >
            {getButtonLabel(gitUrl)}
          </button>
        )}
        {pptUrl && (
          <button 
            className="bg-white text-black font-bold py-2 px-4 rounded-full border-2 border-gray-600 hover:bg-gray-800 hover:text-white mx-2"
            onClick={() => window.open(pptUrl, "_blank")}
          >
            Presentation
          </button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
