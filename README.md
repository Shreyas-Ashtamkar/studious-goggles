# studious-goggles
## Idea - ITERATION 1
- Single Page Web Application
- No Menu Bar
  - Keep list of URLs
  - Generate a webpage with those many iFrames, to contain each URL
  - Keep the widths and Heights of each urls controllable
  - Keep the positions of each of the URLs customisable (For now only vertically all iframes will be in a ul)
- When we add a URL, it should only be visible in a list
- When we click that it should open the webpage in a new page
- Generate button when we click, in the below section, it will create an iframe below, containing the result.
 

## Idea - ITERATION 2
- A part of the URL can also be customisable, like say the search term, which will modify all the provided urls to generate an output. This should load only on "Generate" 
- Convert it into a table model from UL, so that more iframes can be added into multiple columns in the same row.
- Remove the "Generate" button. As soon as the URL is added, dynamically add it into the output Section.
- The Layout should be customisable. Some cells could be bigger, some smaller.
- Store the urls in the local storage, so that we can work offline.


## Idea - ITERATION 3
- Multiple Views
  - Each View can have it's own set of URLs
  - Each View can keep a set of terms ready to be put in-place, so that just a click can help to get the data
  - The main page will have each of these as Cards, which when we click, it will load this view.
  - The Views will also have the url modification terms ( like search terms ) as cards, at some place, for easy access. There should be a way to add and delete these cards, and all this should also be saved in the localhost.
- Auto-Refresh
  - As soon as the Search Term is added, it should give suggestions on the basis of what was previously used, and hitting enter should automatically load the relevant urls with the modified terms.
  - There should be a way to automatically refresh the iframes after a set period of time, minimum being 2 minutes.


## Link
[Link](./website/index.html)
