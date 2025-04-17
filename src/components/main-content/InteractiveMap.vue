<template>
  <section class="map-section">
    <div class="map-header">
      <h2 class="section-title">Выберите точку маршрута</h2>
      <div class="map-filters">
        <button 
          v-for="filter in filters"
          :key="filter.type"
          @click="setActiveFilter(filter.type)"
          :class="{ 'active': activeFilter === filter.type }"
        >
          <img :src="filter.icon" :alt="filter.label">
          {{ filter.label }}
        </button>
      </div>
    </div>

    <div id="yandex-map" ref="mapContainer"></div>

    <transition name="fade">
      <div v-if="selectedLocation" class="location-card">
        <img :src="selectedLocation.preview" class="location-image">
        <div class="location-info">
          <h3>{{ selectedLocation.name }}</h3>
          <p class="location-desc">{{ selectedLocation.description }}</p>
          <div class="location-tours">
            <div v-for="tour in filteredTours" :key="tour.id" class="tour-item">
              <span class="tour-name">{{ tour.name }}</span>
              <span class="tour-price">{{ tour.price }} ₽</span>
              <button @click="openBooking(tour)">Выбрать</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Данные для карты
const locations = ref([
  {
    id: 1,
    name: "Цейское ущелье",
    coords: [42.760, 43.890],
    type: "trekking",
    preview: "/images/locations/cey.jpg",
    description: "Живописное ущелье с ледниками и водопадами"
  },
  {
    id: 2,
    name: "Даргавс",
    coords: [42.840, 44.420],
    type: "history",
    preview: "/images/locations/dargavs.jpg",
    description: "Древний город мёртвых с каменными склепами"
  },
  {
    id: 3,
    name: "Кармадон",
    coords: [42.950, 44.500],
    type: "nature",
    preview: "/images/locations/karmadon.jpg",
    description: "Горное ущелье с живописными видами"
  },
  {
    id: 4,
    name: "Джимара",
    coords: [42.720, 44.250],
    type: "trekking",
    preview: "/images/locations/dzhimara.jpg",
    description: "Горный массив с альпийскими лугами"
  },
  {
    id: 5,
    name: "Фиагдон",
    coords: [42.830, 44.230],
    type: "village",
    preview: "/images/locations/fiagdon.jpg",
    description: "Живописное горное селение"
  },
  {
    id: 6,
    name: "Мамисон",
    coords: [42.710, 43.750],
    type: "ski",
    preview: "/images/locations/mamison.jpg",
    description: "Горнолыжный курорт и перевал"
  },
  {
    id: 7,
    name: "Верхний Мизур",
    coords: [42.780, 43.950],
    type: "village",
    preview: "/images/locations/mizur.jpg",
    description: "Высокогорное село с древними башнями"
  },
  {
    id: 8,
    name: "Дзинага",
    coords: [42.850, 43.850],
    type: "culture",
    preview: "/images/locations/dzinaga.jpg",
    description: "Историческое осетинское село"
  },
  {
    id: 9,
    name: "Беслан",
    coords: [43.193, 44.541],
    type: "history",
    preview: "/images/locations/beslan.jpg",
    description: "Город с богатой историей и мемориальным комплексом"
  },
  {
    id: 10,
    name: "Владикавказ",
    coords: [43.024, 44.681],
    type: "culture",
    preview: "/images/locations/vladikavkaz.jpg",
    description: "Столица Республики Северная Осетия - Алания"
  }
]);

const tours = ref([
  {
    id: 101,
    locationId: 1,
    name: "Треккинг к ледникам",
    type: "trekking",
    price: 6000,
    duration: "8 часов"
  },
  {
    id: 102,
    locationId: 2,
    name: "Экскурсия в Даргавс",
    type: "history",
    price: 4500,
    duration: "5 часов"
  },
  {
    id: 103,
    locationId: 3,
    name: "Экскурсия по Кармадону",
    type: "nature",
    price: 5000,
    duration: "6 часов"
  },
  {
    id: 104,
    locationId: 4,
    name: "Треккинг в Джимаре",
    type: "trekking",
    price: 7000,
    duration: "10 часов"
  },
  {
    id: 105,
    locationId: 9,
    name: "Экскурсия по Беслану",
    type: "history",
    price: 3500,
    duration: "4 часа"
  }
]);

// Фильтрация
const filters = ref([
  { type: "all", label: "Все", icon: "/icons/map/all.svg" },
  { type: "trekking", label: "Трекинг", icon: "/icons/map/trekking.svg" },
  { type: "history", label: "История", icon: "/icons/map/history.svg" },
  { type: "nature", label: "Природа", icon: "/icons/map/nature.svg" },
  { type: "village", label: "Сёла", icon: "/icons/map/village.svg" },
  { type: "culture", label: "Культура", icon: "/icons/map/culture.svg" },
  { type: "ski", label: "Горные лыжи", icon: "/icons/map/ski.svg" }
]);

const activeFilter = ref("all");
const selectedLocation = ref(null);
const mapContainer = ref(null);
let ymap = null;

const filteredTours = computed(() => {
  if (!selectedLocation.value) return [];
  return tours.value.filter(tour => 
    tour.locationId === selectedLocation.value.id &&
    (activeFilter.value === "all" || tour.type === activeFilter.value)
  );
});

// Инициализация карты
const initMap = () => {
  ymaps.ready(() => {
    ymap = new ymaps.Map(mapContainer.value, {
      center: [42.92, 43.95],
      zoom: 8,
      controls: ["zoomControl"],
    }, {
      minZoom: 8,
      maxZoom: 12,
      restrictMapArea: [
        [42.1, 43.5],
        [43.8, 44.8]
      ]
    });

    // Создаем кастомный макет маркера
    const markerLayout = ymaps.templateLayoutFactory.createClass(
      `<div class="custom-marker">
        <div class="marker-icon" style="background-color: {{ properties.iconColor }}; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
          <img src="{{ properties.icon }}" width="24" height="24">
        </div>
        <div class="marker-text">{{ properties.hintContent }}</div>
      </div>`
    );

    // Добавляем маркеры для всех локаций кроме Владикавказа (id:10)
    locations.value.filter(loc => loc.id !== 10).forEach(loc => {
      const marker = new ymaps.Placemark(
        loc.coords,
        {
          hintContent: loc.name,
          balloonContent: `
            <div class="balloon-content">
              <img src="${loc.preview}" alt="${loc.name}" style="width:100%;height:150px;object-fit:cover;border-radius:8px 8px 0 0;">
              <h3 style="margin:12px 0 8px;font-size:18px;">${loc.name}</h3>
              <p style="margin:0 0 12px;color:#666;font-size:14px;">${loc.description}</p>
              <button 
                onclick="window.dispatchEvent(new CustomEvent('select-location', { detail: ${loc.id} }))"
                style="background:#1D68F0;color:white;border:none;padding:10px 16px;border-radius:6px;cursor:pointer;width:100%;font-size:14px;"
              >
                Выбрать тур
              </button>
            </div>
          `,
          icon: getIconByType(loc.type),
          iconColor: getColorByType(loc.type)
        },
        {
          iconLayout: markerLayout,
          iconShape: {
            type: 'Circle',
            coordinates: [0, 0],
            radius: 20
          },
          balloonOffset: [0, -20],
          hideIconOnBalloonOpen: false,
          openBalloonOnClick: true
        }
      );

      marker.events.add('click', () => {
        selectedLocation.value = loc;
      });

      ymap.geoObjects.add(marker);
    });

    // Обработчик выбора локации из балуна
    window.addEventListener('select-location', (e) => {
      selectedLocation.value = locations.value.find(l => l.id === e.detail);
    });
  });
};

// Вспомогательные функции
const getColorByType = (type) => {
  const colors = { 
    trekking: "#4CAF50",
    history: "#FF9800",
    nature: "#8BC34A",
    village: "#9C27B0",
    culture: "#3F51B5",
    ski: "#00BCD4"
  };
  return colors[type] || "#1D68F0";
};

const getIconByType = (type) => {
  const icons = {
    trekking: "/icons/map/trekking.svg",
    history: "/icons/map/history.svg",
    nature: "/icons/map/nature.svg",
    village: "/icons/map/village.svg",
    culture: "/icons/map/culture.svg",
    ski: "/icons/map/ski.svg"
  };
  return icons[type] || "/icons/map/default.svg";
};

const setActiveFilter = (type) => {
  activeFilter.value = type;
};

const openBooking = (tour) => {
  router.push({
    path: '/booking',
    query: { 
      tour: tour.id,
      location: selectedLocation.value.id,
      name: tour.name,
      price: tour.price
    }
  });
};

// Инициализация компонента
onMounted(() => {
  if (window.ymaps) {
    initMap();
  } else {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=fb6d6707-7701-4f51-b637-26b940b2c995&lang=ru_RU';
    script.onload = initMap;
    document.head.appendChild(script);
  }
});
</script>

<style scoped>
.map-section {
  padding: 40px 0;
  background: #f5f7fa;
}

.map-header {
  max-width: 1200px;
  margin: 0 auto 20px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.section-title {
  font-size: 28px;
  color: #1a1a1a;
}

.map-filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.map-filters button {
  padding: 8px 16px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.map-filters button.active {
  background: #1D68F0;
  color: white;
  border-color: #1D68F0;
}

.map-filters button img {
  width: 18px;
  height: 18px;
}

#yandex-map {
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.location-card {
  max-width: 1200px;
  margin: 20px auto 0;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
}

.location-image {
  width: 300px;
  height: 250px;
  object-fit: cover;
}

.location-info {
  padding: 20px;
  flex-grow: 1;
}

.location-desc {
  color: #666;
  margin: 10px 0 20px;
}

.location-tours {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tour-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #f9f9f9;
  border-radius: 8px;
}

.tour-name {
  font-weight: 500;
}

.tour-price {
  font-weight: bold;
  color: #1D68F0;
}

.tour-item button {
  padding: 6px 12px;
  background: #1D68F0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Стили для кастомных маркеров */
.custom-marker {
  position: relative;
  cursor: pointer;
}

.marker-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.marker-text {
  position: absolute;
  left: 50px;
  top: 5px;
  background: white;
  padding: 2px 10px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

/* Стили для балунов */
:deep(.ymaps-2-1-79-balloon__content) {
  padding: 0 !important;
  margin: 0 !important;
}

:deep(.ymaps-2-1-79-balloon__tail) {
  display: none !important;
}

:deep(.ymaps-2-1-79-balloon__layout) {
  border-radius: 12px !important;
  overflow: hidden !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
}

@media (max-width: 768px) {
  .map-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  #yandex-map {
    height: 400px;
  }
  
  .location-card {
    flex-direction: column;
  }
  
  .location-image {
    width: 100%;
    height: 200px;
  }
  
  .marker-text {
    font-size: 12px;
    left: 45px;
  }
}
</style>