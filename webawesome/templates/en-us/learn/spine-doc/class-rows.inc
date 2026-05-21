          <div class="content-padding-inline wa-stack ">
            <h2>
              Description
            </h2>
            <p>This class contains a comment <kbd><b>Rows: {{ result.exampleValue }}</b></kbd>, which means the {{ classeNomSingulier }} API will return a default of {{ result.exampleValue }} results instead of 10 by default. 
            Each API has built in pagination of the search results to ensure a user can query all the data a page at a time without running the application out of memory. 
            </p>

            <h2>
              Suggestion
            </h2>
            {% if exampleValue is not defined -%}
            <p>
              You can add a class comment <kbd><b>Rows: 100</b></kbd> if you wish for the {{ classeNomSingulier }} API to return more or less than 10 results by default. 
              In this case, the API will return 100 results from the API instead of 10 by default. 
              Each API has built in pagination of the search results to ensure a user can query all the data a page at a time without running the application out of memory. 
            </p>
            {% endif -%}
          </div>
