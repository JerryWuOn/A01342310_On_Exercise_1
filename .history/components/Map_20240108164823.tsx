
import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const icon = L.icon({iconUrl: "/images/marker-icon-bear.png"})

const second = L.icon({iconUrl: "/images/marker-expo-icon.png"})


const millennium: [number, number][] =[
    [49.2659, -123.0790],
    [49.2626, -123.0692],
    [49.2589, -123.0454],
    [49.2609, -123.0329],
    [49.2650, -123.0136],
    [49.2664, -123.0016],
    [49.2647, -122.98222],
    [49.2592, -122.9640],
    [49.2546, -122.9392],
    [49.2534, -122.9181],
    [49.2485, -122.8970],
    [49.2613, -122.8899],
    [49.2780, -122.8460],
    [49.2772, -122.8282],
    [49.2739, -122.8001],
    [49.2804, -122.7939],
    [49.2856, -122.7916],
]

const expo: [number, number][][] = [
    [
        [49.2856, -123.1118],
        [49.2851, -123.1207],
        [49.2833, -123.1161],
        [49.2795, -123.1091],
        [49.273114, -123.100348],
        [49.2622, -123.0693],
        [49.2487, -123.0555],
        [49.2448, -123.0469],
        [49.2381, -123.0317],
        [49.2298, -123.0127],
        [49.2256, -123.0037],
        [49.2208, -122.9884],
        [49.2120, -122.9597],
        [49.1996, -122.9507],
        [49.2015, -122.9120],
        [49.2046, -122.9066]
    ],
    [
        [49.2046, -122.9066],
        [49.2044, -122.8743],
        [49.1990, -122.8507],
        [49.1894, -122.8489],
        [49.1824, -122.8449]
    ],
    [
        [49.2046, -122.9066],
        [49.2244, -122.8884],
        [49.2333, -122.8829],
        [49.2485, -122.8970],
        [49.2534, -122.9181]
    ]
]

const orangeOption={color: 'orange'};
const blueOption={color: 'blue'}


const Map = () => {
    return (
        <>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: "4vh"}}>
            <h1 style={{color: 'black', fontSize: 26, fontWeight: 'bold'}}> Jerry's Map of the Expo and Millennium line stations</h1>
        </div>
        <MapContainer
            style={{height: "92vh" }}
            center={[49.24966, -123.00934]} zoom={14} scrollWheelZoom={true}
        >
            <TileLayer
            //add the github reposityory in the href later
                attribution='&copy; <a href="https://github.com/JerryWuOn/A01342310_On_Exercise_1">By Jerry On </a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[49.2659, -123.0790]} icon={icon} >
                <Popup>
                    VCC-Clark Station
                </Popup>
            </Marker>
            <Marker position={[49.2626, -123.0692]} icon={icon} >
                <Popup>
                    Commercial-Broadway Station
                </Popup>
            </Marker>
            <Marker position={[49.2589, -123.0454]} icon={icon} >
                <Popup>
                    Renfrew Station
                </Popup>
            </Marker>
            <Marker position={[49.2609, -123.0329]} icon={icon} >
                <Popup>
                    Rupert Station
                </Popup>
            </Marker>
            <Marker position={[49.2650, -123.0136]} icon={icon} >
                <Popup>
                    Gilmore Station
                </Popup>
            </Marker>
            <Marker position={[49.2664, -123.0016]} icon={icon} >
                <Popup>
                    Brentwood Station
                </Popup>
            </Marker>
            <Marker position={[49.2647, -122.98222]} icon={icon} >
                <Popup>
                    Holdom Station
                </Popup>
            </Marker>
            <Marker position={ [49.2592, -122.9640]} icon={icon} >
                <Popup>
                    Sperling Burnaby Lake Station
                </Popup>
            </Marker>
            <Marker position={[49.2546, -122.9392]} icon={icon} >
                <Popup>
                    Lake City Way Station 
                </Popup>
            </Marker>
            <Marker position={[49.2534, -122.9181]} icon={icon} >
                <Popup>
                    Production Way-University Station
                </Popup>
            </Marker>
            <Marker position={[49.2485, -122.8970]} icon={icon} >
                <Popup>
                    Lougheed Town Centre Station
                </Popup>
            </Marker>
            <Marker position={[49.2613, -122.8899]} icon={icon} >
                <Popup>
                    Burquitlam Station 
                </Popup>
            </Marker>
            <Marker position={[49.2780, -122.8460]} icon={icon} >
                <Popup>
                    Moody Centre Station
                </Popup>
            </Marker>
            <Marker position={[49.2772, -122.8282]} icon={icon} >
                <Popup>
                    Inlet Centre Station
                </Popup>
            </Marker>
            <Marker position={[49.2739, -122.8001]} icon={icon} >
                <Popup>
                    Coquitlam Central Station
                </Popup>
            </Marker>
            <Marker position={[49.2804, -122.7939]} icon={icon} >
                <Popup>
                    Lincoln Station
                </Popup>
            </Marker>
            <Marker position={[49.2856, -122.7916]} icon={icon} >
                <Popup>
                    Lafarge Lake-Douglas Station
                </Popup>
            </Marker>
            <Polyline pathOptions={orangeOption} positions={millennium}/>

            <Marker position={[49.2856, -123.1118]} icon={second} >
                <Popup>
                    Waterfront Station
                </Popup>
            </Marker>
            <Marker position={[49.2851, -123.1207]} icon={second} >
                <Popup>
                    Burrard Station 
                </Popup>
            </Marker>
            <Marker position={[49.2833, -123.1161]} icon={second} >
                <Popup>
                    Granville Station
                </Popup>
            </Marker>
            <Marker position={[49.2795, -123.1091]} icon={second} >
                <Popup>
                    Stadium-Chinatown Station
                </Popup>
            </Marker>
            <Marker position={[49.273114, -123.100348]} icon={second} >
                <Popup>
                    Main Street-Science World Station
                </Popup>
            </Marker>
            <Marker position={[49.2622, -123.0693]} icon={second} >
                <Popup>
                    Commercial-Broadway Station
                </Popup>
            </Marker>
            <Marker position={[49.2487, -123.0555]} icon={second} >
                <Popup>
                    Nanaimo Station
                </Popup>
            </Marker>
            <Marker position={[49.2448, -123.0469]} icon={second} >
                <Popup>
                    29th Avenue Station
                </Popup>
            </Marker>
            <Marker position={[49.2381, -123.0317]} icon={second} >
                <Popup>
                    Joyce-Collingwood Station
                </Popup>
            </Marker>
            <Marker position={[49.2298, -123.0127]} icon={second} >
                <Popup>
                    Patterson Station
                </Popup>
            </Marker>
            <Marker position={[49.2256, -123.0037]} icon={second} >
                <Popup>
                    Metrotown Station
                </Popup>
            </Marker>
            <Marker position={[49.2208, -122.9884]} icon={second} >
                <Popup>
                    Royal Oak Station
                </Popup>
            </Marker>
            <Marker position={[49.2120, -122.9597]} icon={second} >
                <Popup>
                    Edmonds Station
                </Popup>
            </Marker>
            <Marker position={[49.1996, -122.9507]} icon={second} >
                <Popup>
                    22nd Street Station
                </Popup>
            </Marker>
            <Marker position={[49.2015, -122.9120]} icon={second} >
                <Popup>
                    New Westminster Station
                </Popup>
            </Marker>
            <Marker position={[49.2046, -122.9066]} icon={second} >
                <Popup>
                    Columbia Station
                </Popup>
            </Marker>
            

            <Marker position={[49.2044, -122.8743]} icon={second} >
                <Popup>
                    Scott Road Station
                </Popup>
            </Marker>
            <Marker position={[49.1990, -122.8507]} icon={second} >
                <Popup>
                    Gateway Station
                </Popup>
            </Marker>
            <Marker position={[49.1894, -122.8489]} icon={second} >
                <Popup>
                    Surrey Central Station
                </Popup>
            </Marker>
            <Marker position={[49.1824, -122.8449]} icon={second} >
                <Popup>
                    King George Station
                </Popup>
            </Marker>

            <Marker position={[49.2244, -122.8884]} icon={second} >
                <Popup>
                    Sapperton Station
                </Popup>
            </Marker>
            <Marker position={[49.2333, -122.8829]} icon={second} >
                <Popup>
                    Braid Station
                </Popup>
            </Marker>
            <Marker position={[49.2485, -122.8970]} icon={second} >
                <Popup>
                    Lougheed Town Centre Station
                </Popup>
            </Marker>
            <Marker position={[49.2534, -122.9181]} icon={second} >
                <Popup>
                    Production Way - University Station
                </Popup>
            </Marker>
            <Polyline pathOptions={blueOption} positions={expo}/>
        </MapContainer>
        </>
    )
}
export default Map;

