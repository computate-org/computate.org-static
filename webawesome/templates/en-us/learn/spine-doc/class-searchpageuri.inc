          <div class="content-padding-inline wa-stack ">
            <h2>
              Description
            </h2>
            <p>
              Web pages can be defined for searching the data model as a search page. 
              allowing users with access to a data model to search those data models. 
              so SPINE Programming makes it easy to define web pages in addition to APIs to perform common REST (Representational State Transfer) verbs 
              to POST, PATCH, GET, DELETE, and PUT data into a database and search engine, and retrieve model instances as JSON data. 
              The <kbd>{{ result.commentVar }}</kbd> is used as the base URI for search page of the Java class data model. 
            </p>
            <wa-scroller orientation="horizontal" style="--start-shadow-opacity: 0; --end-shadow-opacity: 0;"><pre class="wa-border-radius-square"><code>/**
 * ApiMethod:
 *   SearchPageFrFR:
 *     Language: frFR
 *     Page: FishPopulationPage
 *     ApiUri: /fr-fr/rechercher/population-poissons
 */
public class FishPopulation extends FishPopulationGen&lt;BaseModel&gt; {
}</code></pre></wa-scroller>
            <p>
              Search pages in multiple languages are supported in SPINE Programming as an <kbd>ApiMethod:</kbd>. 
              This involves specifying a unique ID <kbd>SearchPageFrFR:</kbd>, for the data model in the given language. 
              This also involves specifying the <kbd>Language: frFR</kbd>, where the <kbd>fr</kbd> stands for the language "français", 
              and the <kbd>FR</kbd> stands for the country "France" where the language is spoken locally. 
              This also includes the Java class <kbd>Page: FishPopulationPage</kbd> that is used to render the page in that language. 
              The <kbd>ApiUri: /fr-fr/rechercher/population-poissons</kbd> is a unique API URI separate from other languages where the page can be served in that language. 
            </p>
          </div>
