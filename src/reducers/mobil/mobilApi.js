

async function getDataMobil(){
      let url ="http://localhost:8000/api/v1/cars";
      let url2 ="https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json";
      // if (available != undefined && tipe_supir != undefined && capacity != undefined){
      //       url =`http://localhost:8000/api/v1/cars?available=${available}&tipe_supir=${tipe_supir}&capacity=${capacity}`;
      // } else if (available != undefined && tipe_supir){
      //       url =`http://localhost:8000/api/v1/cars?available=${available}&tipe_supir=${tipe_supir}`;
      // }
      const mobil = await fetch("http://localhost:8000/api/v1/cars");
      const json = mobil.json();
      return json;
}

export{getDataMobil};