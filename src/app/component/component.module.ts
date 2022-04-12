import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesComponent } from './stories/stories.component';
import { DiscoverComponent } from './discover/discover.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { BestGalleriesComponent } from './best-galleries/best-galleries.component';
import { TopArtistsComponent } from './top-artists/top-artists.component';
import { ExploreNewComponent } from './explore-new/explore-new.component';
import { DiscoverLatestComponent } from './discover-latest/discover-latest.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopValueArtistsComponent } from './top-value-artists/top-value-artists.component';
import { TopSellingComponent } from './top-selling/top-selling.component';
import { TopInvestorComponent } from './top-investor/top-investor.component';
import { ArtworksComponent } from './artworks/artworks.component';
import { BestSellingComponent } from './best-selling/best-selling.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    StoriesComponent,
    DiscoverComponent,
    AuctionsComponent,
    BestGalleriesComponent,
    TopArtistsComponent,
    ExploreNewComponent,
    DiscoverLatestComponent,
    TopValueArtistsComponent,
    TopSellingComponent,
    TopInvestorComponent,
    ArtworksComponent,
    BestSellingComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SideMenuComponent,
    StoriesComponent,
    DiscoverComponent,
    AuctionsComponent,
    BestGalleriesComponent,
    TopArtistsComponent,
    ExploreNewComponent,
    DiscoverLatestComponent,
    TopValueArtistsComponent,
    TopSellingComponent,
    TopInvestorComponent,
    ArtworksComponent,
    BestSellingComponent,
    NavBarComponent
  ]
})
export class ComponentModule { }
