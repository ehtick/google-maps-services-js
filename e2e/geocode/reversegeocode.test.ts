/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { reverseGeocode } from "../../src/geocode/reversegeocode";

test("reverseGeocode should return correct response", async () => {
  const params = {
    latlng: {
      lat: 60.168997,
      lng: 24.9433353,
    },
    key: process.env.GOOGLE_MAPS_API_KEY,
  };
  const r = await reverseGeocode({ params: params });
  expect(r.data.results.length).toBeTruthy();
});

test("reverseGeocode should return correct response using place_id", async () => {
  const params = {
    place_id: "ChIJKxDbe_lYwokRVf__s8CPn-o",
    key: process.env.GOOGLE_MAPS_API_KEY,
  };
  const r = await reverseGeocode({ params: params });
  expect(r.data.results.length).toBeTruthy();
});


test("reverseGeocode should return correct response when address descriptors are enabled", async () => {
  const params = {
    latlng: {
      lat: 28.650080,
      lng: 77.233172,
    },
    enable_address_descriptor: true,
    key: process.env.GOOGLE_MAPS_API_KEY,
  };
  const r = await reverseGeocode({ params: params });
  console.log("Response data:", r.data);
  console.log("Address descriptor:", r.data.address_descriptor);
  expect(r.data.address_descriptor.landmarks.length > 0).toBeTruthy();
});