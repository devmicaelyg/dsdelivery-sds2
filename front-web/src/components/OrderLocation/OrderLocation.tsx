import './styles.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AsyncSelect from 'react-select/async';
import { useState } from 'react';
import { fetchLocalMapBox } from '../../service/api';
import { OrderLocationData } from '../../models/OrderLocationData';

const initialPosition = {
    lat: 51.505,
    lng: -0.09
}

type Place = {
    label?: string,
    value?: string,
    position: {
        lat: number, 
        lng: number
    }
}

type Props = {
    onChangeLocation: (Location: OrderLocationData) => void; 
}

const OrderLocation = ({ onChangeLocation }: Props) => {

    const [addrees, setAddress] = useState<Place>({
        position: initialPosition
    });

    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
        const response = await fetchLocalMapBox(inputValue);
      
        const places = response.data.features.map((item: any) => {
          return ({
            label: item.place_name,
            value: item.place_name,
            position: {
              lat: item.center[1],
              lng: item.center[0]
            },
            place: item.place_name,
          });
        });
      
        callback(places);
      };
      
      const handleChangeSelect = (place: Place) => {
        setAddress(place);
        onChangeLocation({
          latitude: place.position.lat,
          longitude: place.position.lng,
          address: place.label!
        });
      };

    return(
        <div className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title">
                    Selecione onde o produto deve ser entregue
                </h3>
     
            <div className="filter-container">
                <AsyncSelect 
                    placeholder="Digite o endereço aqui"
                    className="filter"
                    loadOptions={loadOptions}
                    onChange={value => handleChangeSelect(value as Place)}
                />
            </div>   
        
 
          <MapContainer center={addrees.position} zoom={13} scrollWheelZoom={false} key={addrees.position.lat}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={addrees.position}>
              <Popup>
               {addrees.label}
            </Popup>
            </Marker>
          </MapContainer>
       
        </div>
        </div>
    )
}

export default OrderLocation; 