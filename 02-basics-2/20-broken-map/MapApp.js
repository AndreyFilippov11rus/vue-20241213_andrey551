import {computed, defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    // Реактивные переменные для хранения координат метки
    const x = ref(0)
    const y = ref(0)
    const pinStyle = computed(() => ({ left: `${x.value}px`, top: `${y.value}px` }))

    /**
     * Обработчик клика по карте для установки координат метки
     * @param {MouseEvent} event
     */
    function handleClick(event) {
      x.value = event.offsetX
      y.value = event.offsetY
    }

    return {
      handleClick,
      pinStyle,
    }
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span class="pin" :style="pinStyle">📍</span>
      <span>{{pinStyle}}</span>
    </div>
  `,
})
