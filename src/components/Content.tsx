import { ContentConfig } from "../configs/ContentConfig";




export const Content = () => {
  return (
    <div>
      {ContentConfig.map((item) => {
        return (
          <div>
            <div>{item.img}</div>
            <div>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
  
};


