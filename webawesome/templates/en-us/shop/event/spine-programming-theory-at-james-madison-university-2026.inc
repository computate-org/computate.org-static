

        <div class="wa-stack red-pink-background-headers ">

          <wa-tooltip for="carousel-item-0" placement="bottom" hoist>
            Christopher Tate and Benjamin Branch presenting the Smart Aquaculture workshop at the the Generative AI to Enhance Supply Chain Resilience NEDSI 2025 research conference in Hershey, Pennsylvania. 
          </wa-tooltip>

          <wa-carousel style="--aspect-ratio: 12/4; " autoplay loop navigation pagination autoplay-interval="5000">
            <wa-carousel-item id="carousel-item-0">
              <img src="{{ STATIC_BASE_URL }}/smart-aquaculture-static/webawesome/jpg/nedsi-conference-2025.jpg">
            </wa-carousel-item>
          </wa-carousel>

          <div class="wa-flank ">
            <i class="fa-brands fa-redhat fa-8x "></i>
            <div>
              <h1 class="brand-font">
                {{ result.name }}
              </h1>
            </div>
          </div>
          <p>
            {{ result.description }}
          </p>
        </div>