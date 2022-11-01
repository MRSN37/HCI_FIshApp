<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>HOME</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense" class="ion-no-border">
        <ion-toolbar>
          <ion-title size="large">HOME</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card class="row1">
              <ion-card-header>
                <ion-card-subtitle>Kolam</ion-card-subtitle>
                <ion-card-title><b>10</b></ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card class="row1">
              <ion-card-header>
                <ion-card-subtitle>Kolam Aktif</ion-card-subtitle>
                <ion-card-title>10</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card class="row1">
              <ion-card-header>
                <ion-card-subtitle>Ikan Hidup</ion-card-subtitle>
                <ion-card-title>182 <span>Ekor</span></ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card class="row1">
              <ion-card-header>
                <ion-card-subtitle>Ikan Mati</ion-card-subtitle>
                <ion-card-title ><b>89 Ekor</b></ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card class="row1">
              <ion-card-header>
                <ion-card-subtitle>Panen 2022</ion-card-subtitle>
                <ion-card-title><b>109 Kg</b></ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card class="row1">
              <ion-card-header>
                <ion-card-subtitle>Total Pakan</ion-card-subtitle>
                <ion-card-title>223 Kg</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
      <div class="text">
        <h3>TOTAL BERAT IKAN</h3>
      </div>

      <ion-row>
          <ion-col>
            <ion-card class="row2">
              <img alt="catfish" src="https://i.pinimg.com/originals/71/ab/7a/71ab7a5fd6b0a7f23d5ad0fcce4ad40d.png" style="width: 500px;height: 150px;"/>
              <ion-card-header>
                <ion-card-title>Ikan Lele</ion-card-title>
                <ion-card-subtitle><span class="blue">200 Kg</span></ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card class="row2">
              <img alt="Red Parrot Fish" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77790/red-perch-clipart-md.png" style="width: 500px;height: 150px;"/>
              <ion-card-header>
                <ion-card-title>Ikan Nila</ion-card-title>
                <ion-card-subtitle><span class="blue">220 Kg</span></ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      <div class="text">
        <h3>KUALITAS AIR</h3>
      </div>
      
      <ion-row>
          <ion-col>
            <ion-card class="row3">
              <ion-card-header>
                <ion-card-title><b>pH</b></ion-card-title>
                <ion-card-subtitle>Normal: <span class="blue">5 Kolam</span></ion-card-subtitle>
                <ion-card-subtitle>Abnormal: <span class="blue">5 Kolam</span></ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card class="row3">
              <ion-card-header>
                <ion-card-title><b>DO</b></ion-card-title>
                <ion-card-subtitle>Normal: <span class="blue">5 Kolam</span></ion-card-subtitle>
                <ion-card-subtitle>Abnormal: <span class="blue">5 Kolam</span></ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid,IonCol,IonRow,IonCard } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonCol,
    IonRow,
    IonCard
  }
});
</script>

<style scoped>
 .row1 {
  background-color: rgba(255, 255, 255, 0.904);
  color: black;
 }
 ion-card-subtitle{
  color: black;
 }
 ion-card-title{
  color: black;
  font-weight: bold;
 }
 .blue{
  color: blue;
 }
 .text{
  color: rgba(255, 255, 255, 0.904);
  padding-left: 17px;
  font-weight: bold;
 }
 .row2{
  background-color: rgba(255, 255, 255, 0.904);
 }

 .row3{
  background-color: rgba(255, 255, 255, 0.904);
 }
</style>
