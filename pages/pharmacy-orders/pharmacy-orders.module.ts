import { NgModule } from '@angular/core';
import { orderListModule } from "./order-list/order-list.module";
import { imageViewModule } from "./image-view/image-view.module";
import { orderDeliveryDirectionModule } from "./order-delivery-direction/order-delivery-direction.module";
import { orderDetailsModule } from "./order-details/order-details.module";
import { orderDetailsModalModule } from "./order-details-modal/order-details-modal.module";
import { quotationUploadModule } from "./quotation-upload/quotation-upload.module";
import { orderHistoryModal } from "./order-history/order-history.module";
import { orderHistoryFilterModalModule } from "./order-history-filter-modal/order-history-filter-modal.module";
import { pharmacyOrderIndexModule } from "./order-index/order-index.module";
import { quotationCreateModule } from "./quotation-create/quotation-create.module";

@NgModule({
  declarations: [
  ],
  imports: [
    orderListModule,
    imageViewModule,
    orderDeliveryDirectionModule,
    orderDetailsModule,
    orderDetailsModalModule,
    quotationUploadModule,
    orderHistoryModal,
    orderHistoryFilterModalModule,
    pharmacyOrderIndexModule,
    quotationCreateModule
  ],
})

export class pharmacyOrdersModule { }