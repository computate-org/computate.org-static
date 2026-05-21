          <div class="content-padding-inline wa-stack ">
            <h2>
              Description
            </h2>
            <p>
              As a form of engaging visual communication, you can also define visual cues for identifying a data model in the user interface by defining an icon from an icon library. 
              Above we define a fish icon from the Font Awesome library to the <kbd>{{ classSimpleName }}</kbd> data model. 
            </p>
            <wa-breadcrumb>
              <wa-breadcrumb-item id="return-to-FishPopulation" variant="brand" href="https://smaq.computate.org/en-us/search/fish-population" aria-labelledby="wa-tooltip-fARiLJOGmkfPnfuZXZ0C4">
                <i class="fa-duotone fa-regular fa-fish" aria-hidden="true"></i>
                all fish populations
              <wa-icon library="system" variant="solid" name="chevron-right" data-default="" slot="separator" aria-hidden="true" rotate="0" style="--rotate-angle: 0deg;"></wa-icon></wa-breadcrumb-item>
              <wa-breadcrumb-item aria-current="page">
                search fish populations
              <wa-icon library="system" variant="solid" name="chevron-right" data-default="" slot="separator" aria-hidden="true" rotate="0" style="--rotate-angle: 0deg;"></wa-icon></wa-breadcrumb-item>
            </wa-breadcrumb>
            <p>
              When the user sees the fish icon, it serves as a visual cue that reminds the user that it's related to <kbd>{{ classSimpleName }}</kbd>. 
            </p>
            <p>
              The Icon contains an environment variable  <kbd>{{ '{{ ' + 'FONTAWESOME_STYLE' + ' }}' | replace("{{", "&#123;&#123;") | replace("}}", "&#125;&#125;") }}</kbd> inside double curly braces. 
              The reason for this is to allow for a consistent, flexible choice of Font Awesome Icon Packs at runtime. 
              Font Awesome provides many fun Icon Packs to customize the look and feel of your website. 
              Your data models extend this Font Awesome flexibility if you include this <kbd>{{ '{{ ' + 'FONTAWESOME_STYLE' + ' }}' | replace("{{", "&#123;&#123;") | replace("}}", "&#125;&#125;") }}</kbd> variable in your model icon. 
            </p>
            <pre class="wa-border-radius-square"><code>/**
 * Icon: &lt;i class="fa-kit fa-spine"&gt;&lt;/i&gt;
 */
public class SpineDoc extends SpineDocGen<BaseResult> {
}</basemodel></code></pre>
            <p>
              You can also include icons without the environment variable, like Font Awesome brand icons and custom icons from your Font Awesome Kit. 
            </p>
            <wa-breadcrumb>
              <wa-breadcrumb-item id="return-to-FishPopulation" variant="brand">
                <i class="fa-kit fa-spine" aria-hidden="true"></i>
                all SPINE docs
              <wa-icon library="system" variant="solid" name="chevron-right" data-default="" slot="separator" aria-hidden="true" rotate="0" style="--rotate-angle: 0deg;"></wa-icon></wa-breadcrumb-item>
              <wa-breadcrumb-item aria-current="page">
                search SPINE docs
              <wa-icon library="system" variant="solid" name="chevron-right" data-default="" slot="separator" aria-hidden="true" rotate="0" style="--rotate-angle: 0deg;"></wa-icon></wa-breadcrumb-item>
            </wa-breadcrumb>
          </div>
