

        <div class="wa-stack red-pink-background-headers ">

          <wa-tooltip for="carousel-item-0" placement="bottom" hoist>Christopher Tate demoing the Smart Aquaculture platform at the Red Hat booth at All Things Open 2025. </wa-tooltip>
          <wa-tooltip for="carousel-item-1" placement="bottom" hoist>Christopher Tate and Dewayne Branch at All Things Open 2025. </wa-tooltip>
          <wa-tooltip for="carousel-item-2" placement="bottom" hoist>Christopher Tate demoing the Smart Aquaculture platform at the Red Hat booth at All Things Open 2025. </wa-tooltip>
          <wa-tooltip for="carousel-item-3" placement="bottom" hoist>The Red Hat booth team at All Things Open 2025. </wa-tooltip>

          <wa-carousel style="--aspect-ratio: 12/4; " autoplay loop navigation pagination autoplay-interval="5000">
            <wa-carousel-item id="carousel-item-0">
              <img src="{{ STATIC_BASE_URL }}/event/{{ result.pageId }}/ato-demo-2025.jpg">
            </wa-carousel-item>
            <wa-carousel-item id="carousel-item-1">
              <img src="{{ STATIC_BASE_URL }}/event/{{ result.pageId }}/ato-chris-dewayne-2025.jpg">
            </wa-carousel-item>
            <wa-carousel-item id="carousel-item-2">
              <img src="{{ STATIC_BASE_URL }}/event/{{ result.pageId }}/smart-aquaculture-all-things-open-2025-demo.jpg">
            </wa-carousel-item>
            <wa-carousel-item id="carousel-item-3">
              <img src="{{ STATIC_BASE_URL }}/event/{{ result.pageId }}/all-things-open-2025-red-hat-booth.png">
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
          <wa-card>
            <div class="wa-align-items-center wa-grid wa-gap-3xl ">
              <div class="wa-frame wa-border-radius-l ">
                <img src="{{ STATIC_BASE_URL }}/png/smart-aquaculture-vscode-workbench.png"/>
              </div>
              <div class="wa-stack ">
                <h3 class="wa-heading-xl ">
                  Smart Aquaculture platform demo
                </h3>
                <p>
                  Christopher Tate demoed the features of the Smart Aquaculture platform, 
                  including fine-grained access control to Smart Aquaculture data. 
                </p>
                <p class="wa-caption-l ">
                  We have a free course available to deploy the whole Smart Aquaculture platform with GitOps. 
                  See the <a href="https://smaq.computate.org/en-us/view/article/deploying-smart-aquaculture-on-openshift-local">Deploying Smart Aquaculture on OpenShift Local</a> course. 
                </p>
                <div>
                  <div>Speakers:</div>
                  <ul>
                    <li>Christopher Tate, Principal Software Engineer, Red Hat</li>
                  </ul>
                </div>
              </div>
            </div>
          </wa-card>

          <wa-card with-header>
            <div slot="header">
              <div class="wa-flank ">
                <div>
                  <h2 class="wa-heading-xl ">
                    About the conference
                    All Things Open
                  </h2>
                </div>
              </div>
            </div>
            <div class="wa-stack ">
              <div class="wa-grid wa-gap-3xl ">
                <div class="wa-frame wa-border-radius-l ">
                  <img src="{{ STATIC_BASE_URL }}/event/{{ result.pageId }}/all-things-open-2025-red-hat-booth.png"/>
                </div>
                <div>
                  <p>
                    ATO is an educational conference where attendees learn about new technologies and topics, and it’s always been that way. The goal is for attendees to leave having learned something or been made aware of something new. 
                  </p>
                </div>
              </div>
            </div>
          </wa-card>
        </div>