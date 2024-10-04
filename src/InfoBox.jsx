import Card from '@mui/material/Card';
import "./InfoBox.css";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox( {info} ){

    const INIT_URL = "http://images.unsplash.com/photo-1507119949454-53568edd075c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9";
    const HOT_URL = "https://www.treehugger.com/thmb/emVFfdc5Dwzu-u531n2zOSyvkLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__07__palm_trees_hot_sun-f8e20b86425b492f9d777d92db46db49.jpg";
    const COLD_URL ="https://www.climaterealityproject.org/sites/default/files/timothy-eberly-lhm2nldtc9g-unsplash.jpg";
    const RAIN_URL = "http://images.unsplash.com/photo-1506563805286-a52f937ec9ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8cmFpbiUyMHNreXx8MHx8fHwxNjI2OTg3NTg1&ixlib=rb-1.2.1&q=80&w=1080";

    return (
        <div className="InfoBox">
         <div className="CardContainer">
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={info.humidity > 80 ? RAIN_URL  :info.temp > 15 ? HOT_URL :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <ThunderstormIcon/> :info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The Weather can be described as <b><i>{info.weather}</i></b> and feels like {info.feelsLike}&deg;C</p>
            
        </Typography>
      </CardContent>
    </Card>
       </div>
        </div>
    );
}