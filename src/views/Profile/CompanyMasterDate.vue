<template>  
  <div class="flex items-center justify-between mb-5">
    <h3 class="font-bold text-xl">Company Master Date</h3>
    <button class="btn btn-sky">
      <svg class="mr-2.5" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.29728 1.94697L0.511591 6.73266C0.335245 6.90934 0.223795 7.14043 0.195336 7.38843L0.00465225 9.06272C-0.00777759 9.18046 0.00476819 9.29949 0.0414703 9.41206C0.0781724 9.52462 0.138205 9.62817 0.217649 9.71595C0.297092 9.80373 0.394158 9.87377 0.502509 9.92149C0.61086 9.96921 0.728058 9.99354 0.84645 9.99288H0.944117L2.61841 9.8022C2.86542 9.77362 3.09601 9.66405 3.27418 9.49059L8.05986 4.70025L5.29728 1.94697ZM9.67835 1.54235L8.46449 0.328488C8.36294 0.226539 8.24226 0.145645 8.10938 0.0904472C7.97649 0.0352498 7.83402 0.00683594 7.69012 0.00683594C7.54623 0.00683594 7.40375 0.0352498 7.27087 0.0904472C7.13799 0.145645 7.01731 0.226539 6.91576 0.328488L5.79027 1.45399L8.55285 4.21657L9.67835 3.09107C9.7803 2.98953 9.86119 2.86885 9.91639 2.73597C9.97159 2.60308 10 2.4606 10 2.31671C10 2.17282 9.97159 2.03034 9.91639 1.89746C9.86119 1.76457 9.7803 1.6439 9.67835 1.54235Z"
          fill="black"
        />
      </svg>
      <span>Edit</span>
    </button>
  </div>
  <h4 class="font-semibold text-base mb-5">General Information</h4>
  <div class="grid grid-cols-2 gap-20 mb-5">
    <div class="">
      <label class="label" for="Name">Name</label>
      <input type="text" id="Name" placeholder="Enter Name" class="input" />
    </div>
    <div class="">
      <label class="label" for="LegalName">Legal Name</label>
      <input type="text" id="LegalName" placeholder="Enter Legal Name" class="input" />
    </div>
    <div class="">
      <label class="label" for="VATID">VAT ID</label>
      <input type="text" id="VATID" placeholder="Enter VAT ID" class="input" />
    </div>
    <div class="">
      <label class="label" for="EmailAddress">Email Address</label>
      <input type="email" id="EmailAddress" placeholder="Enter Email Address" class="input" />
    </div>
    <div class="">
      <label class="label" for="ContactNumber">Contact Number</label>
      <input type="text" id="ContactNumber" placeholder="Enter Contact Number" class="input" />
    </div>
    <div class="">
      <label class="label" for="Website">Website</label>
      <input type="text" id="Website" placeholder="Enter Website" class="input" />
    </div>
  </div>
  <h4 class="font-semibold text-base mb-5">Business Address</h4>
  <div class="grid grid-cols-2 gap-20 mb-5">
    <div class="">
      <label class="label" for="StreetHouseNumber">Street & House Number</label>
      <input type="text" id="StreetHouseNumber" placeholder="Enter Street & House Number" class="input" />
    </div>
    <div class="">
      <label class="label" for="Zipcode">Zipcode</label>
      <input type="text" id="Zipcode" placeholder="Enter Zipcode" class="input" />
    </div>
    <div class="">
      <label class="label" for="City">City</label>
      <input type="text" id="City" placeholder="Enter City" class="input" />
    </div>
    <div class="">
      <label class="label" for="Country">Country</label>
      <input type="email" id="Country" placeholder="Enter Country" class="input" />
    </div>
  </div>
  <h4 class="font-semibold text-base mb-5">Billing Address</h4>
  <div class="grid grid-cols-2 gap-20">
    <div class="">
      <label class="label" for="BillingStreetHouseNumber">Street & House Number</label>
      <input type="text" id="BillingStreetHouseNumber" placeholder="Enter Street & House Number" class="input" />
    </div>
    <div class="">
      <label class="label" for="BillingZipcode">Zipcode</label>
      <input type="text" id="BillingZipcode" placeholder="Enter Zipcode" class="input" />
    </div>
    <div class="">
      <label class="label" for="BillingCity">City</label>
      <input type="text" id="BillingCity" placeholder="Enter City" class="input" />
    </div>
    <div class="">
      <label class="label" for="BillingCountry">Country</label>
      <input type="email" id="BillingCountry" placeholder="Enter Country" class="input" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyMasterDate"
};
</script>
