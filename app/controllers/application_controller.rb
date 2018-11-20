class ApplicationController < ActionController::Base
  helper_method :resource_name, :resource, :devise_mapping, :resource_class
  def resource_name
    :user
  end

  def resource
    @resource ||= User.new
  end

  def resource_class
    User
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end
end

# <!-- Slideshow container -->
# <div class="slideshow-container">
# <!-- Full-width images with number and caption text -->
#   <div class="mySlides fade">
#     <div class="numbertext">1 / 3</div>
#     <img src="https://robohash.org/nesciuntsintinventore.png?size=300x300&set=set1" style="width:100%">
#     <div class="text">Caption Text</div>
#   </div>
#
#   <div class="mySlides fade">
#     <div class="numbertext">2 / 3</div>
#     <img src="https://robohash.org/excepturiculpavoluptatum.png?size=300x300&set=set1"style="width:100%">
#     <div class="text">Caption Two</div>
#   </div>
#
#  <div class="mySlides fade">
#     <div class="numbertext">3 / 3</div>
#     <img src="https://robohash.org/molestiasettempora.png?size=300x300&set=set1" style="width:100%">
#     <div class="text">Caption Three</div>
#   </div>
#
#  <!-- Next and previous buttons -->
#   <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
#   <a class="next" onclick="plusSlides(1)">&#10095;</a>
# </div>
# <br>
#
# <!-- The dots/circles -->
# <div style="text-align:center">
#   <span class="dot" onclick="currentSlide(1)"></span>
#   <span class="dot" onclick="currentSlide(2)"></span>
#   <span class="dot" onclick="currentSlide(3)"></span>
# </div>
