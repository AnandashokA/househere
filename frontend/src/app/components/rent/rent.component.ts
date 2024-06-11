import { Component } from '@angular/core';
import { RentItem } from '../rent.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.css'
})
export class RentComponent {
  rentalData: RentItem[] =[
    {
      "imageUrl": "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "place": "Chennai, Tamil Nadu",
      "locality": "Adyar",
      "details": "2 BHK apartment, 1200 sq ft, ₹25,000/month, semi-furnished, near beach.",
      "ownerName": "Rajesh Kumar",
      "phoneNumber": "+91 9876543210",

    },
    {
      "imageUrl": "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "place": "Chennai, Tamil Nadu",
      "locality": "T Nagar",
      "details": "3 BHK villa, 1800 sq ft, ₹40,000/month, fully furnished, gated community.",
      "ownerName": "Sangeetha Reddy",
      "phoneNumber": "+91 9876543211",

    },
    {
      "imageUrl": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "place": "Chennai, Tamil Nadu",
      "locality": "Nungambakkam",
      "details": "1 BHK condo, 900 sq ft, ₹18,000/month, balcony view, close to shopping centers.",
      "ownerName": "Vijay Patel",
      "phoneNumber": "+91 9876543212"
    },
    {
      "imageUrl": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      "place": "Chennai, Tamil Nadu",
      "locality": "Velachery",
      "details": "Studio apartment, 600 sq ft, ₹22,000/month, newly renovated, near IT parks.",
      "ownerName": "Priya Singh",
      "phoneNumber": "+91 9876543213"
    },
    {
      "imageUrl": "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "place": "Chennai, Tamil Nadu",
      "locality": "Anna Nagar",
      "details": "2 BHK apartment, 1100 sq ft, ₹27,000/month, park view, gated community.",
      "ownerName": "Karthik Raj",
      "phoneNumber": "+91 9876543214"
    },
    {
      "imageUrl": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "place": "Chennai, Tamil Nadu",
      "locality": "Mylapore",
      "details": "1 BHK apartment, 800 sq ft, ₹19,000/month, pet-friendly, near metro station.",
      "ownerName": "Shanthi Subramanian",
      "phoneNumber": "+91 9876543215"
    },
    {
      "imageUrl": "https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "place": "Chennai, Tamil Nadu",
      "locality": "Guindy",
      "details": "3 BHK townhouse, 1500 sq ft, ₹30,000/month, garden space, close to airport.",
      "ownerName": "Prakash Menon",
      "phoneNumber": "+91 9876543216"
    },
    {
      "imageUrl": "https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "place": "Chennai, Tamil Nadu",
      "locality": "Mogappair",
      "details": "2 BHK apartment, 1000 sq ft, ₹25,000/month, modern amenities, near schools.",
      "ownerName": "Anusha Srinivasan",
      "phoneNumber": "+91 9876543217"
    },
    {
      "imageUrl": "https://images.unsplash.com/photo-1506126279646-a697353d3166?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "place": "Chennai, Tamil Nadu",
      "locality": "Pallikaranai",
      "details": "2 BHK condo, 1300 sq ft, ₹24,000/month, lake view, close to hospitals.",
      "ownerName": "Gopal Krishnan",
      "phoneNumber": "+91 9876543218"
    },
    {
      "imageUrl": "https://images.unsplash.com/photo-1628624747271-4df6ca1e1ba3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "place": "Chennai, Tamil Nadu",
      "locality": "Tambaram",
      "details": "1 BHK apartment, 850 sq ft, ₹21,000/month, newly built, near railway station.",
      "ownerName": "Lakshmi Iyer",
      "phoneNumber": "+91 9876543219"
    }
  ]
  selectedItem: RentItem | null = null;

  handleCardClick(item: RentItem) {
    this.selectedItem = item;
  }


  constructor(private router:Router) { }


  ngOnInit(): void {
    // Initialize data here if needed
  }
}
