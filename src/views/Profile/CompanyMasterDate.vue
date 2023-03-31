<template>
  <h3 class="font-bold text-xl mb-5">Company Master Date</h3>
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
