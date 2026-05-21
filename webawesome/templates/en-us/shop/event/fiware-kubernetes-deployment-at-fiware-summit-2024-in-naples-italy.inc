

        <div class="wa-stack red-pink-background-headers ">

          <wa-tooltip for="carousel-item-0" placement="bottom" hoist>
            Christopher Tate presenting the Smart Aquaculture Cloud Sandbox technical workshop at the 2024 FIWARE Summit. 
          </wa-tooltip>
          <wa-tooltip for="carousel-item-1" placement="bottom" hoist>
            Christopher Tate presenting Smart Cities panel discussion at the 2024 FIWARE Summit. 
          </wa-tooltip>

          <wa-carousel style="--aspect-ratio: 12/4; " autoplay loop navigation pagination autoplay-interval="5000">
            <wa-carousel-item id="carousel-item-0">
              <img src="{{ STATIC_BASE_URL }}/event/{{ result.pageId }}/fiware-summit-2024-technical-workshop.jpg">
            </wa-carousel-item>
            <wa-carousel-item id="carousel-item-1">
              <img src="{{ STATIC_BASE_URL }}/event/{{ result.pageId }}/fiware-summit-2024-panel.jpg">
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

        <div class="pink-purple-background">
          <div class="intro-content">
            <div class="wa-crown">
              <i class="fa-duotone fa-regular fa-browser fa-5x "></i>
            </div>
            <h1 class="brand-font">
              Learn how to deploy open source smart device microservices based on the FIWARE IoT device standards like NGSI-LD to the cloud
            </h1>
            <h2 class="brand-font">
              with the {{ result.name }}
            </h2>
            <div class="intro-details">
              <div>
                This course will become available for participants at the 
                <a href="https://www.eventbrite.de/e/fiware-tech-training-naples-tickets-920143322447">FIWARE Summit Technical Training</a>
                in Naples, Italy September 18 2024 · 9:30am – September 19 · 5:30pm CEST 
              </div>
              <wa-button id="order-button" class="gradient-button pink-purple-background" variant="neutral" href="https://www.eventbrite.de/e/fiware-tech-training-naples-tickets-920143322447">
                <i class="fa-duotone fa-regular fa-person-running-fast"></i>
                Register for the training
              </wa-button>
            </div>
          </div>
        </div>

        <div class="summary-wrapper">
          <div class="summary">
            <h2 class="brand-font anchor-heading">
              What is the {{ result.name }}?
            </h2>
            <p>
              Learn how to deploy open source smart device microservices to the cloud and try out your own secure IoT smart platform with built-in security. 
            </p>

            <div class="summary-grid">
              <div>
                <div class="icon-heading">
                  <i class="fa-duotone fa-regular fa-code"></i>
                  <h3>
                    Modern development tools
                  </h3>
                </div>
                <p>
                  Learn how to install all the latest cloud deployment tools on your own computer like VSCode, Jupyter, Ansible, Helm, and OpenShift command line interface, 
                  and start deploying microservices to the cloud like a modern cloud developer. 
                </p>
              </div>

              <div>
                <div class="icon-heading">
                  <i class="fa-duotone fa-regular fa-cloud-arrow-up"></i>
                  <h3>
                    Cloud-native microservices
                  </h3>
                </div>
                <p>
                  Deploy modern microservices to an OpenShift Local environment on your own laptop in development, or in production. 
                  Applications include FIWARE IoT Agent JSON, ScorpioBroker FIWARE Context Broker, certificate management, event bus application clustering, databases, a search engine, and single sign-on server for securing and scaling your data-driven website. 
                </p>
              </div>
            </div>

          </div>
        </div>