<template>
  <div class="flex items-center ml-52 mt-12">
    <div>
      <Image :src="profilePicture" class="rounded-full" />
      <div class="relative left-10 bottom-5">
        <p>
          <input
            class="hidden"
            type="file"
            accept="image/*"
            name="image"
            id="file"
            @change="loadProfileImg($event)"
          />
        </p>
        <p>
          <label
            class="opacity-0 border-2 border-gray-500 rounded-md p-1 bg-gray-200 text-xs font-semibold hover:opacity-100"
            for="file"
            style="cursor: pointer"
            >Upload Image</label
          >
        </p>
      </div>
    </div>
    <p className="px-20 pb-0 text-left font-semibold text-5xl">User Profile</p>
  </div>
  <div className="flex flex-col items-start p-12 px-52">
    <div className="flex">
      <div className="flex flex-col items-start pb-8 pr-16">
        <label
          for="firstName"
          class="text-gray-600 mt-3 h-auto w-52 text-left p-2"
          >First Name</label
        >
        <input
          class="border-4 border-gray-400 rounded-lg p-1.5"
          type="text"
          name="firstName"
          placeholder="Enter your name"
          v-model="firstName"
        />
      </div>
      <div className="flex flex-col items-start pb-8">
        <label
          for="lastName"
          class="text-gray-600 mt-3 h-auto w-52 text-left p-2"
          >Last Name</label
        >
        <input
          class="border-4 border-gray-400 rounded-lg p-1.5"
          type="text"
          name="lastName"
          placeholder="Enter your name"
          v-model="lastName"
        />
      </div>
    </div>

    <div className="flex flex-col items-start pb-8">
      <!-- <Textbox nametag="aboutUser" text="About Me" /> -->
      <label for="aboutMe" class="text-gray-600 mt-3 h-auto w-52 text-left p-2"
        >About Me</label
      >
      <textarea
        name="aboutMe"
        class="border-4 border-gray-400 rounded-lg p-1.5"
        id="aboutMe"
        cols="60"
        rows="5"
        v-model="aboutMe"
      ></textarea>
    </div>
    <div className="flex items-end">
      <div className="flex flex-col items-start">
        <!-- <Textbox nametag="shipAdd" text="Shipping Address" /> -->
        <label
          for="shippingAddress"
          class="text-gray-600 mt-3 h-auto w-52 text-left p-2"
          >Shipping Address</label
        >
        <textarea 
          name="shippingAddress"
          class="border-4 border-gray-400 rounded-lg p-1.5"
          id="shippingAddress"
          cols="60"
          rows="5"
          v-model="shippingAddress"
        ></textarea>
      </div>
      <div
        class="p-2 border-2 border-black bg-blue-600 text-white rounded-lg ml-20 hover:bg-white hover:text-black transition ease-out duration-300"
      >
        <button @click="updateUser">Update Profile</button>
      </div>
    </div>
  </div>

  <div>
    <div class="flex p-12 justify-around">
      <a className="pl-40 text-left text-4xl">My Products</a>
      <a className="px-40 text-left text-4xl">My Purchase</a>
      <a className="pr-40 text-left font-semibold text-4xl">Add Product</a>
    </div>
    <div
      class="flex flex-wrap items-start mx-52 gap-10 border-2 p-2"
      id="productImgCont"
    >
      <!-- index to point at the items -->
      <Image v-for="image in images" :key="image.id" :src="image.src" />
      <div class="flex flex-col justify-around h-48">
        <input
          class="hidden"
          type="file"
          accept="image/*"
          name="image"
          id="uploadProductImg"
          @change="uploadProductImage($event)"
        />
        <label
          class="border-2 border-gray-400 p-2 rounded-md hover:bg-blue-600 hover:text-white transition ease-linear duration-300"
          for="uploadProductImg"
          style="cursor: pointer"
          >Upload</label
        >
        <input
          class="hidden"
          type="button"
          name="popImage"
          id="popProductImage"
          @click="popProductImage($event)"
        />
        <label
          class="border-2 border-gray-400 p-2 rounded-md hover:bg-blue-600 hover:text-white transition ease-linear duration-300"
          for="popProductImage"
          style="cursor: pointer"
          >Delete</label
        >
      </div>
    </div>
  </div>
  <div class="flex px-52">
    <div class="flex flex-col items-start mr-16">
      <label
        for="productName"
        class="text-gray-600 mt-3 h-auto w-52 text-left p-2"
        >Product Name</label
      >
      <input
        class="border-4 border-gray-400 rounded-lg p-1.5"
        type="text"
        name="productName"
        placeholder="Enter product name"
        v-model="productName"
        required
      />
    </div>
    <div class="flex flex-col items-start mr-16">
      <label
        for="productPoints"
        class="text-gray-600 mt-3 h-auto w-52 text-left p-2"
        >Product Points</label
      >
      <input
        class="border-4 border-gray-400 rounded-lg p-1.5"
        type="number"
        name="productPoints"
        placeholder="Enter product value"
        v-model="productPoints"
        required
      />
    </div>
    <div class="flex flex-col items-start mr-16">
      <label
        for="productQty"
        class="text-gray-600 mt-3 h-auto w-52 text-left p-2"
        >Product Quantity</label
      >
      <input
        class="border-4 border-gray-400 rounded-lg p-1.5"
        type="number"
        name="productQty"
        placeholder="Enter product quantity"
        v-model="productQty"
        required
      />
    </div>
    <div class="flex justify-start">
      <Dropdown class="" />
    </div>
  </div>
  <div class="flex flex-col items-start px-52">
    <label
      for="productDescription"
      class="text-gray-600 mt-3 h-auto w-52 text-left p-2"
      >Description</label
    >
    <textarea
      name="productDescription"
      class="border-4 border-gray-400 rounded-lg p-1.5"
      id="productDescription"
      cols="90"
      rows="10"
      placeholder="Enter product description here."
      v-model="productDescription"
    ></textarea>
    <div class="mt-7">
      <!-- <Button class="mb-10 hover:bg-white hover:text-black hover:border-black transition ease-linear duration-500" type="submit" label="Add Product" :primary="true" /> -->
      <!-- <button type="submit" class="border-2 p-3 rounded-lg bg-blue-400 border-gray-300 text-white mb-28">Add Product</button> -->
      <Button
        class="mb-10 transform hover:scale-125 hover:opacity-75 transition ease-out duration-300"
        type="submit"
        @click="handleSubmit"
        label="Add Product"
        :primary="true"
      />
    </div>
  </div>
</template>

<script>
import Card from "/@/components/organism/Card/Card.vue";
import Textbox from "/@/components/molecule/Textbox/Textbox.vue";
import Image from "/@/components/molecule/Image/Image.vue";
import Dropdown from "/@/components/molecule/Dropdown/Dropdown.vue";
import Button from "/@/components/molecule/Button/Button.vue";
import {
  createProduct,
  currentUser,
  getUserProfile,
  getUserProfileDoc,
  updateUserProfile,
} from "/@/utils/firebase";
import firebase from "firebase";

export default {
  name: "ProfileAdd",
  data() {
    return {
      firstName: "",
      lastName: "",
      images: [
        {
          id: "1",
          src:
            "https://images.theconversation.com/files/371985/original/file-20201130-13-xieqc.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C5129%2C2560&q=45&auto=format&w=668&h=324&fit=crop",
        },
      ],
      profilePicture:
        "https://images.csmonitor.com/csm/2020/10/1109550_1_1005-seal-maine_standard.jpg?alias=standard_900x600",
      addProductDetails: [],
      productName: "",
      productPoints: "",
      productDescription: "",
      productQty: "",
      condition: "",
      shippingAddress: "",
      aboutMe: "",
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        console.log("user is logged in: ", user);
        console.log(user.displayName);
        const userDetails = getUserProfileDoc(user.email);
        if ((await userDetails).empty) {
          console.log("no matching user");
        } else {
          (await userDetails).forEach((doc) => {
            const details = doc.data();
            this.aboutMe = details.about;
            this.shippingAddress = details.address;
            this.firstName = details.first_name;
            this.lastName = details.last_name;
          });
        }
      } else {
        console.log("user is logged out.");
      }
    });
    getUserProfile();
  },
  methods: {
    async updateUser() {
      const user = currentUser();
      if (user) {
        await updateUserProfile(
          user.uid,
          this.aboutMe,
          this.shippingAddress,
          this.firstName,
          this.lastName
        );
        console.log("successfully updated user profile!");
      } else {
        console.log("failed to update user profile...");
      }
    },
    handleBack() {
      this.$router.go(-1);
    },
    handleSubmit() {
      // takes the data from the form and put it into a suitable format using
      // Object.fromentries to grab individual input and destructure it
      // name attribute must be given in each input
      let testProduct;
      const user = currentUser();
      // const {
      //   productName,
      //   productPoints,
      //   condition,
      //   productDescription,
      // } = Object.fromEntries(new FormData(event.target));
      // this.productName = productName;
      // this.productPoints = productPoints;
      // this.condition = condition;
      // this.productDescription = productDescription;
      // to see the values generated
      console.log(
        this.productName,
        this.productPoints,
        this.productQty,
        this.condition,
        this.productDescription
      );
      this.addProductDetails.push({
        uploadedBy: user.uid,
        name: this.productName,
        points: this.productPoints,
        quanity: this.productQty,
        conditions: this.condition,
        description: this.productDescription,
        status: "true",
        photos: this.images,
      });
      // to check whether it is stored into addProductDetails
      console.log(this.addProductDetails);
      // adding objects into testProduct variable
      testProduct = {
        id: Date.now(),
        uploadedBy: user.uid,
        name: this.productName,
        points: this.productPoints,
        quanity: this.productQty,
        conditions: this.condition,
        description: this.productDescription,
        status: "true",
        photos: this.images,
      };
      // storing the data into the firestore
      // for status, true means product is available
      // false means product is in shipping, shipped or paid
      // const user = currentUser();
      const prodId = String(testProduct.id);
      console.log(prodId);
      // createProduct(prodId, user.uid, testProduct)
      // console.log("product created.");
      if (user !== null) {
        // const newProduct = db.collection("userProfile").doc(uid).collection('products').add(this.addProductDetails)
        // create new document with info from testProduct into the subCollection
        createProduct(prodId, user.uid, testProduct)
          .then(function () {
            console.log("product created.");
            // clear the inputs after adding product
          })
          .then(function () {
            alert("Successfully added the product");
          });
      }
      this.productName = "";
      this.productPoints = "";
      this.condition = "";
      this.productDescription = "";
      this.productQty = "";
      this.images = [];
      // this.$router.push("/profile_add");
      // need create a storage link to store images
      // link the user ID with their products
    },
    loadProfileImg: function (event) {
      this.profilePicture = URL.createObjectURL(event.target.files[0]);
      console.log(this.profilePicture);

      // need to store the image and load it when user logins
    },
    uploadProductImage: function (event) {
      if (this.images.length <= 6) {
        this.images.push({
          id: Date.now(),
          src: URL.createObjectURL(event.target.files[0]),
        });
        console.log(this.images);
      }
    },
    popProductImage: function (event) {
      if (this.images.length > -1) {
        this.images.pop();
      }
      console.log(this.images);
    },
  },
  setup() {


    //   // const form = reactive({id: '', name: '', points: '', condition: '', description: '', productImages: ''}) // form.name

    //   const handleSubmit = async () => {
    //     await createProduct({...form})
    //     form.name = ''
    //   }

    //   // handleSubmit: async () => {
    //   //   await createProfile({...form})
    //   //   form.name = ''
    //   // },
  },
  components: {
    Card,
    Textbox,
    Image,
    Dropdown,
    Button,
  },
};
</script>
