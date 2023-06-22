import React from 'react';

const GoogleDriveIframe = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="relative" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src="https://drive.google.com/u/0/uc?id=1lMb5q0VyHRi3XDQpUR5tzECcuuuM5uJN"
          title="Google Drive Embed"
          className="absolute inset-0 w-full h-full hidden sm:block"
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1 className="text-center text-[30px] font-bold py-4 font-formal"> BackGround Guide</h1>
      <GoogleDriveIframe />
    </div>
  );
};

export default App;
