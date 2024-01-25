import { Injectable } from '@angular/core';
import { Product } from './domains';
import { RtlScrollAxisType } from '@angular/cdk/platform';

@Injectable({
  providedIn: 'root'
})
export class ShoppingdataService {

  private cart : Array<Product> = new Array()

  constructor() { }

  fakeProducts() : Array<Product> {
    return [{
      "name": "Juice - Grapefruit, 341 Ml",
      "price": 50,
      "description": "Repair Right Extraocular Muscle, Open Approach",
      "image": "http://dummyimage.com/218x100.png/dddddd/000000",
      "id": 1
    }, {
      "name": "Icecream Bar - Del Monte",
      "price": 73,
      "description": "Revision of Drainage Device in Lower Jaw, Open Approach",
      "image": "http://dummyimage.com/179x100.png/ff4444/ffffff",
      "id": 2
    }, {
      "name": "Pasta - Rotini, Colour, Dry",
      "price": 34,
      "description": "Insertion of Intraluminal Device into Tracheobronchial Tree, Open Approach",
      "image": "http://dummyimage.com/219x100.png/dddddd/000000",
      "id": 3
    }, {
      "name": "Beer - Sleeman Fine Porter",
      "price": 72,
      "description": "Bypass Left Popliteal Artery to Lower Extremity Artery, Open Approach",
      "image": "http://dummyimage.com/173x100.png/ff4444/ffffff",
      "id": 4
    }, {
      "name": "Tia Maria",
      "price": 45,
      "description": "Upper Bones, Extirpation",
      "image": "http://dummyimage.com/238x100.png/cc0000/ffffff",
      "id": 5
    }, {
      "name": "Bread - Roll, Italian",
      "price": 90,
      "description": "Removal of Drainage Device from Thyroid Gland, Percutaneous Endoscopic Approach",
      "image": "http://dummyimage.com/164x100.png/5fa2dd/ffffff",
      "id": 6
    }, {
      "name": "Juice - Propel Sport",
      "price": 67,
      "description": "Beam Radiation of Spleen using Neutrons",
      "image": "http://dummyimage.com/205x100.png/5fa2dd/ffffff",
      "id": 7
    }, {
      "name": "Flour - Corn, Fine",
      "price": 59,
      "description": "Supplement Left Foot Vein with Synthetic Substitute, Open Approach",
      "image": "http://dummyimage.com/214x100.png/ff4444/ffffff",
      "id": 8
    }, {
      "name": "French Pastry - Mini Chocolate",
      "price": 68,
      "description": "Insertion of Monoplanar External Fixation Device into Right Ulna, Percutaneous Approach",
      "image": "http://dummyimage.com/228x100.png/dddddd/000000",
      "id": 9
    }, {
      "name": "Orange - Tangerine",
      "price": 98,
      "description": "Occlusion of Descending Colon with Extraluminal Device, Percutaneous Endoscopic Approach",
      "image": "http://dummyimage.com/151x100.png/5fa2dd/ffffff",
      "id": 10
    }, {
      "name": "Pesto - Primerba, Paste",
      "price": 95,
      "description": "Fluoroscopy of Portal and Splanchnic Veins using Other Contrast",
      "image": "http://dummyimage.com/141x100.png/cc0000/ffffff",
      "id": 11
    }, {
      "name": "Canadian Emmenthal",
      "price": 52,
      "description": "Bypass Innominate Artery to Right Lower Arm Artery, Open Approach",
      "image": "http://dummyimage.com/196x100.png/dddddd/000000",
      "id": 12
    }, {
      "name": "Jam - Raspberry,jar",
      "price": 87,
      "description": "Repair Right Cephalic Vein, Open Approach",
      "image": "http://dummyimage.com/123x100.png/5fa2dd/ffffff",
      "id": 13
    }, {
      "name": "Cocoa Powder - Natural",
      "price": 42,
      "description": "Drainage of Pancreatic Duct, Open Approach, Diagnostic",
      "image": "http://dummyimage.com/198x100.png/5fa2dd/ffffff",
      "id": 14
    }, {
      "name": "Corn - On The Cob",
      "price": 94,
      "description": "Bypass Left Hepatic Duct to Left Hepatic Duct with Intraluminal Device, Percutaneous Endoscopic Approach",
      "image": "http://dummyimage.com/140x100.png/dddddd/000000",
      "id": 15
    }, {
      "name": "Wine - Penfolds Koonuga Hill",
      "price": 93,
      "description": "Excision of Prostate, Via Natural or Artificial Opening, Diagnostic",
      "image": "http://dummyimage.com/246x100.png/ff4444/ffffff",
      "id": 16
    }, {
      "name": "Chocolate - Feathers",
      "price": 87,
      "description": "Revision of Drainage Device in Lower Jaw, Percutaneous Approach",
      "image": "http://dummyimage.com/128x100.png/dddddd/000000",
      "id": 17
    }, {
      "name": "Quail - Eggs, Fresh",
      "price": 89,
      "description": "Revision of External Fixation Device in Right Knee Joint, Percutaneous Endoscopic Approach",
      "image": "http://dummyimage.com/135x100.png/dddddd/000000",
      "id": 18
    }, {
      "name": "Sauce - Mint",
      "price": 22,
      "description": "Removal of Drainage Device from Right Tarsal Joint, External Approach",
      "image": "http://dummyimage.com/175x100.png/dddddd/000000",
      "id": 19
    }, {
      "name": "Napkin - Beverage 1 Ply",
      "price": 21,
      "description": "Drainage of Right Kidney Pelvis with Drainage Device, Via Natural or Artificial Opening",
      "image": "http://dummyimage.com/168x100.png/dddddd/000000",
      "id": 20
    }, {
      "name": "Bread Fig And Almond",
      "price": 34,
      "description": "Reposition Right Scapula, Percutaneous Approach",
      "image": "http://dummyimage.com/169x100.png/5fa2dd/ffffff",
      "id": 21
    }, {
      "name": "Pasta - Ravioli",
      "price": 51,
      "description": "Dilation of Left Pulmonary Artery, Percutaneous Approach",
      "image": "http://dummyimage.com/250x100.png/5fa2dd/ffffff",
      "id": 22
    }, {
      "name": "Beer - True North Strong Ale",
      "price": 69,
      "description": "Dilation of Right Common Iliac Artery, Bifurcation, Percutaneous Approach",
      "image": "http://dummyimage.com/178x100.png/cc0000/ffffff",
      "id": 23
    }, {
      "name": "Baking Soda",
      "price": 40,
      "description": "Repair Left Innominate Vein, Percutaneous Approach",
      "image": "http://dummyimage.com/168x100.png/ff4444/ffffff",
      "id": 24
    }, {
      "name": "Tea - Apple Green Tea",
      "price": 99,
      "description": "Drainage of Right Upper Femur with Drainage Device, Percutaneous Approach",
      "image": "http://dummyimage.com/192x100.png/cc0000/ffffff",
      "id": 25
    }, {
      "name": "Nantucket Apple Juice",
      "price": 25,
      "description": "Fusion of Lumbar Vertebral Joint with Interbody Fusion Device, Anterior Approach, Anterior Column, Percutaneous Endoscopic Approach",
      "image": "http://dummyimage.com/243x100.png/dddddd/000000",
      "id": 26
    }, {
      "name": "Lamb - Loin Chops",
      "price": 36,
      "description": "Revision of Monitoring Device in Kidney, Via Natural or Artificial Opening Endoscopic",
      "image": "http://dummyimage.com/156x100.png/cc0000/ffffff",
      "id": 27
    }, {
      "name": "Bread - Corn Muffaleta Onion",
      "price": 97,
      "description": "Removal of Monitoring Device from Spinal Canal, Open Approach",
      "image": "http://dummyimage.com/190x100.png/cc0000/ffffff",
      "id": 28
    }, {
      "name": "Spinach - Packaged",
      "price": 30,
      "description": "Destruction of Vagina, Percutaneous Endoscopic Approach",
      "image": "http://dummyimage.com/232x100.png/ff4444/ffffff",
      "id": 29
    }, {
      "name": "Bread - Ciabatta Buns",
      "price": 27,
      "description": "Release Right Mastoid Sinus, Percutaneous Endoscopic Approach",
      "image": "http://dummyimage.com/227x100.png/dddddd/000000",
      "id": 30
    }, {
      "name": "Pie Shell - 5",
      "price": 30,
      "description": "Release Left Ureter, Via Natural or Artificial Opening Endoscopic",
      "image": "http://dummyimage.com/249x100.png/dddddd/000000",
      "id": 31
    }, {
      "name": "Sausage - Liver",
      "price": 93,
      "description": "Drainage of Cystic Duct, Via Natural or Artificial Opening Endoscopic",
      "image": "http://dummyimage.com/136x100.png/dddddd/000000",
      "id": 32
    }, {
      "name": "Fib N9 - Prague Powder",
      "price": 35,
      "description": "Fusion of 2 or more Cervical Vertebral Joints, Posterior Approach, Posterior Column, Percutaneous Approach",
      "image": "http://dummyimage.com/209x100.png/5fa2dd/ffffff",
      "id": 33
    }, {
      "name": "Oil - Olive Bertolli",
      "price": 47,
      "description": "Insertion of Intraluminal Device into Anus, Percutaneous Approach",
      "image": "http://dummyimage.com/126x100.png/ff4444/ffffff",
      "id": 34
    }, {
      "name": "Brandy Cherry - Mcguinness",
      "price": 26,
      "description": "Ultrasonography of Right Pulmonary Artery",
      "image": "http://dummyimage.com/198x100.png/cc0000/ffffff",
      "id": 35
    }, {
      "name": "Cookies - Oreo, 4 Pack",
      "price": 31,
      "description": "Drainage of Radial Nerve, Percutaneous Endoscopic Approach, Diagnostic",
      "image": "http://dummyimage.com/212x100.png/cc0000/ffffff",
      "id": 36
    }, {
      "name": "Flower - Dish Garden",
      "price": 42,
      "description": "Destruction of Left Ovary, Open Approach",
      "image": "http://dummyimage.com/225x100.png/dddddd/000000",
      "id": 37
    }, {
      "name": "Beef - Ox Tongue, Pickled",
      "price": 43,
      "description": "Removal of Monitoring Device from Upper Intestinal Tract, Percutaneous Endoscopic Approach",
      "image": "http://dummyimage.com/140x100.png/cc0000/ffffff",
      "id": 38
    }, {
      "name": "Calypso - Pineapple Passion",
      "price": 34,
      "description": "Drainage of Left Carpal, Percutaneous Approach, Diagnostic",
      "image": "http://dummyimage.com/181x100.png/cc0000/ffffff",
      "id": 39
    }, {
      "name": "Nescafe - Frothy French Vanilla",
      "price": 83,
      "description": "Beam Radiation of Bronchus using Photons >10 MeV",
      "image": "http://dummyimage.com/242x100.png/cc0000/ffffff",
      "id": 40
    }, {
      "name": "Lamb - Sausage Casings",
      "price": 32,
      "description": "Division of Esophagogastric Junction, Percutaneous Endoscopic Approach",
      "image": "http://dummyimage.com/165x100.png/ff4444/ffffff",
      "id": 41
    }, {
      "name": "Shrimp - Black Tiger 6 - 8",
      "price": 93,
      "description": "Repair Thoracic Nerve, Open Approach",
      "image": "http://dummyimage.com/168x100.png/ff4444/ffffff",
      "id": 42
    }, {
      "name": "Bonito Flakes - Toku Katsuo",
      "price": 46,
      "description": "Excision of Right Carpal Joint, Percutaneous Approach, Diagnostic",
      "image": "http://dummyimage.com/168x100.png/5fa2dd/ffffff",
      "id": 43
    }, {
      "name": "Bonito Flakes - Toku Katsuo",
      "price": 47,
      "description": "Insertion of Ring External Fixation Device into Left Humeral Head, Percutaneous Endoscopic Approach",
      "image": "http://dummyimage.com/103x100.png/5fa2dd/ffffff",
      "id": 44
    }, {
      "name": "Sachet",
      "price": 23,
      "description": "Lymphatic and Hemic Systems, Reposition",
      "image": "http://dummyimage.com/106x100.png/5fa2dd/ffffff",
      "id": 45
    }, {
      "name": "Shrimp - Baby, Cold Water",
      "price": 27,
      "description": "Revision of Extraluminal Device in Fallopian Tube, External Approach",
      "image": "http://dummyimage.com/206x100.png/5fa2dd/ffffff",
      "id": 46
    }, {
      "name": "Bread - Corn Muffaleta Onion",
      "price": 48,
      "description": "Restriction of Left Brachial Artery with Extraluminal Device, Open Approach",
      "image": "http://dummyimage.com/244x100.png/5fa2dd/ffffff",
      "id": 47
    }, {
      "name": "Yeast - Fresh, Fleischman",
      "price": 22,
      "description": "Revision of Spacer in Left Elbow Joint, External Approach",
      "image": "http://dummyimage.com/104x100.png/cc0000/ffffff",
      "id": 48
    }, {
      "name": "Canada Dry",
      "price": 24,
      "description": "Alteration of Left Axilla with Synthetic Substitute, Open Approach",
      "image": "http://dummyimage.com/222x100.png/5fa2dd/ffffff",
      "id": 49
    }, {
      "name": "Lamb - Leg, Bone In",
      "price": 31,
      "description": "Drainage of Occipital-cervical Joint with Drainage Device, Open Approach",
      "image": "http://dummyimage.com/102x100.png/dddddd/000000",
      "id": 50
    }]
  }

  addToCart(product: Product) {
    this.cart.push(product)
  }

  getCartItems()  {
    return this.cart
  }

  removeItem(product : Product) {
    this.cart = this.cart.filter(itm => itm.id != product.id)
  }

}
