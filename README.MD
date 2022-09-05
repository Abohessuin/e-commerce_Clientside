# How Filters work

   filters is keys and each is type of filter called filter holder which is class and encapsulated with all logic it need for it for building quary or        build body and why using classes to always make our code extandable not always need to use if or change in it if i need to change i will either extend
   type of filter holder (key) or change in it and we preserve SOLID princple by this espcially open/close one and for more illustration for details check this diagram 
   https://drive.google.com/file/d/1eu5cocqnDm9K6LDzisx2bCQ_Kbc-ihoo/view?usp=sharing
   

# Helpers for this  project

   making an Endpoint for search to return all search if there is no filters or return filters if front request it with body and endpoint dont using 
   Ruby on Rails and postgresql DB on clever cloud and make collect some fake data of 8 products to simulate filters scenarion and create small schema 
   

# Front end Test cases
   
   finally i choose cypress to test my components and install enviroment from scratch and use to test some components 
   
#  Important Url
      1-Deploy front end on netlify:
        https://eccomm.netlify.app/search
   
      2-Deploy back end on horuko heroku and repo link for endpoint:
        https://github.com/Abohessuin/e-commerce_API
      
      
# not handling things
   1-filters will not cover all critia needed
   
   2- on click on button of filter and click out it wont close (know)
   
   

## Site URL 
  https://eccomm.netlify.app/search

## note
  not home pgae redirect to /search




   

