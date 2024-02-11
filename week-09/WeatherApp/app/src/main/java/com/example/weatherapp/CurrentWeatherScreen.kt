package com.example.weatherapp

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import androidx.navigation.compose.rememberNavController
import coil.compose.AsyncImage

@Composable
fun CurrentWeatherScreen(navController: NavHostController)
{
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.White)
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Header("Tampere")
        Row(
            modifier = Modifier
                .fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceAround,
            verticalAlignment = Alignment.CenterVertically
        ) {
            AsyncImage(
                model = "https://openweathermap.org/img/wn/01d@4x.png",
                contentDescription = "Icon indicating sunny weather",
                modifier = Modifier.size(125.dp),
            )
            Text(text = "20°C", fontSize = 40.sp)
        }
        Text(text = "Sunny", fontSize = 24.sp, modifier = Modifier.padding(vertical = 8.dp))
        Text(text = "5 m/s Northeast", fontSize = 24.sp)
        Spacer(modifier = Modifier.weight(1f))
        Button(
            onClick = {
                navController.navigate("weatherForecastScreen")
            },
            modifier = Modifier
                .fillMaxWidth()
        ) {
            Text(text = stringResource(R.string.go_to_forecast), fontSize = 24.sp, modifier = Modifier.padding(8.dp))
        }
    }
}

@Preview
@Composable
fun CurrentWeatherScreenPreview()
{
    // Mock nav controller
    val navController = rememberNavController()
    CurrentWeatherScreen(navController)
}