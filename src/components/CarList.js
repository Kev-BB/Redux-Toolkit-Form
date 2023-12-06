import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import {removeCar} from "../store/carsSlice"

function CarList() {
  // Yapılacaklar: Store'dan arabaları alın
  const { cars } = useSelector((store) => store.cars)
  const dispatch = useDispatch();


  const onClick = (car) => {
    // Yapılacak: Arabayı silin
    dispatch(removeCar(car));

  };

  const renderedCars = cars.map((car, id) => {
    return (
      <div key={id} className="panel">
        <p>
          {car.name} - ${car.value}
        </p>
        <button className="button" onClick={() => onClick(car.id)}>
          Sil
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars.length ? (
        renderedCars
      ) : (
        <div className="no-cars">Başlamak için araba ekleyin</div>
      )}
    </div>
  );
}

export default CarList;
