mapboxgl.accessToken =
  "pk.eyJ1IjoibXJibHVlYmx1ZSIsImEiOiJjaXlkd3ZraXYwMHFiMzNzY3NxODk4MGl2In0.CPFk2QWcg9RCwJUkR04Mdg";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9",
  center: [104.0668, 30.5728],
  zoom: 3
});

map.on("load", onLoad);

const sources = ["china", "amdo", "tibet", "qinghai", "xinjiang", "yunan"];

function onLoad() {
  sources.forEach(source => {
    map.addSource(source, {
      type: "geojson",
      data: `https://raw.githubusercontent.com/mrblueblue/geojson/master/geojson/${source}.json`
    });
  });

  map.addLayer({
    id: "park-boundary",
    type: "fill",
    source: "china",
    paint: {
      "fill-color": "#f49542",
      "fill-outline-color": "red",
      "fill-opacity": 0.3
    },
    filter: [
      "any",
      ["==", "name", "西藏"],
      ["==", "name", "四川"],
      ["==", "name", "云南"],
      ["==", "name", "青海"],
      ["==", "name", "新疆"],
      ["==", "name", "甘肃"],
      ["==", "name", "陕西"],
      ["==", "name", "北京"],
      ["==", "name", "河南"],
      ["==", "name", "香港"]
    ]
  });

  map.addLayer({
    id: "park-boundary1",
    type: "fill",
    source: "tibet",
    paint: {
      "fill-color": "blue",
      "fill-opacity": 0.2
    },
    filter: ["any", ["==", "name", "拉萨市"], ["==", "name", "日喀则地区"]]
  });

  map.addLayer({
    id: "park-boundary2",
    type: "fill",
    source: "qinghai",
    paint: {
      "fill-color": "yellow",
      "fill-opacity": 0.2
    },
    filter: [
      "any",
      ["==", "name", "西宁市"],
      ["==", "name", "玉树藏族自治州"],
      ["==", "name", "海南藏族自治州"],
      ["==", "name", "海西蒙古族藏族自治州"]
    ]
  });

  map.addLayer({
    id: "yunan-boundary",
    type: "fill",
    source: "yunan",
    paint: {
      "fill-color": "green",
      "fill-opacity": 0.2
    },
    filter: ["any", ["==", "name", "迪庆藏族自治州"]]
  });

  map.addLayer({
    id: "tibet-boundary",
    type: "fill",
    source: "amdo",
    paint: {
      "fill-color": "green",
      "fill-opacity": 0.2
    }
  });

  map.addLayer({
    id: "xinjiang-boundary",
    type: "fill",
    source: "xinjiang",
    paint: {
      "fill-color": "red",
      "fill-opacity": 0.2
    },
    filter: [
      "any",
      ["==", "name", "乌鲁木齐市"],
      ["==", "name", "吐鲁番地区"],
      ["==", "name", "喀什地区"],
      ["==", "name", "克孜勒苏柯尔克孜自治州"]
    ]
  });
}
