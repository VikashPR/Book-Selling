<template>
  <section class="carousel">
    <div id="heroControls" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#heroControls" class="active" data-slide-to="0"></li>
        <li data-target="#heroControls" data-slide-to="1"></li>
        <li data-target="#heroControls" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item">
          <img class="img-fluid" src="https://images.unsplash.com/photo-1466583985723-b74122659346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="Firstslide">
        </div>
          <div class="carousel-item active">
            <img class="img-fluid" src="https://images.unsplash.com/photo-1471417834049-cbf30bf7a2a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1327&q=80" alt="Second slide">
          </div>
        <div class="carousel-item">
          <img class="img-fluid" src="https://images.unsplash.com/photo-1515891396453-6d7e56096a39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="Third slide">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Carousel'
}
</script>

<style scoped>
.img-fluid {
  height:90vh;
  width:100vw;
}

ol.carousel-indicators li {
  background-color: white;
  height: 20px;
  width: 20px;
  border-radius: 30px;
  border: 0.6px solid black;
}

ol.carousel-indicators li.active {
  background: #dbf0fa;
}
</style>
